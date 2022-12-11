import { format as _format } from 'date-fns'

//形式が増えたら追記する
type Format = 'yyyy-MM-dd HH:mm' | 'yyyy月MM日dd HH時mm分'

/**
 * 日付をformatする関数
 */
export const formatDate = (date: Date, format: Format) => {
  return _format(date, format)
}
