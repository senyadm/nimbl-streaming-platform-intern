// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { videos} from './fakeData/videos'
import { videoCardType } from '@/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<videoCardType[]>
) {
  res.status(200).json(videos)
}
