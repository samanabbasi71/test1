import React from 'react'

export default function RateFunction({rate}) {
            if(rate == 5) {
                return true
            } else if(rate == 4) {
                return <span className="popularity-text">
                    بسیار عالی
                </span>
                
            } else if(popularity >= 7) {
                return <span className="popularity-text">
                    عالی
                </span>
                
            }
            else if(popularity >= 6) {
                return <span className="popularity-text">
                    خوب
                </span>
                
            }
            else if(popularity >= 5) {
                return <span className="popularity-text">
                    قابل قبول
                </span>
            }
        }
