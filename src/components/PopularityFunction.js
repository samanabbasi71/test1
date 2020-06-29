import React from 'react'

export default function PopularityFunction({popularity}) {
            if(popularity >= 9) {
                return <span className="popularity-text">
                    فوق العاده
                </span>
            } else if(popularity >= 8) {
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
