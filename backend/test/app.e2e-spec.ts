import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { useContainer } from 'class-validator';
import { createTodoMutation, todoQuery } from './todo';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  /**
   * graphqlへのリクエスト
   */
  const requestGraphql = () => request(app.getHttpServer()).post('/graphql');

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    useContainer(app.select(AppModule), { fallbackOnErrors: true });
    await app.init();
  });

  it('/graphql (createTodo -> Todo)', async () => {
    let todo;
    await requestGraphql()
      .send({
        query: createTodoMutation,
        variables: {
          input: {
            title: '新しいTODO',
            description: '新しいTODOの説明',
          },
        },
      })
      .expect((res) => {
        todo = res.body.data.createTodo;
      })
      .then(() =>
        requestGraphql()
          .send({
            query: todoQuery,
            variables: {
              uuid: todo.uuid,
            },
          })
          .expect((res) => {
            expect(res.body.data.todo).toEqual({
              createdAt: todo.createdAt,
              description: todo.description,
              id: todo.id,
              title: todo.title,
              updatedAt: todo.updatedAt,
              uuid: todo.uuid,
            });
          }),
      );
  });
});
