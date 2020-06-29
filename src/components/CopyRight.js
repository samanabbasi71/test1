import React from 'react'
import { FiInstagram } from 'react-icons/fi'
import { TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti'

export default function CopyRight() {
    return (
        <div className="copyright-container">
            <div className="copyright">
                <p className="copyright-text text-justify">
                کلیه حقوق این سایت محفوظ و متعلق به آژانس هواپیمایی و جهانگردی علی بابا می‌باشد. (ورژن 4.202.1)
                </p>
                <div className="copyright-links">
                <div className="copyright-link__container">
                    <a href="https://www.instagram.com/alibabaticket/" className="copyright-link">
                        <FiInstagram className="copyright-icon" />
                    </a>
                </div>
                <div className="copyright-link__container">
                    <a href="https://www.linkedin.com/company/alibaba-ir" className="copyright-link">
                        <TiSocialLinkedin className="copyright-icon" />
                    </a>
                </div>
                <div className="copyright-link__container  tweeter">
                    <a href="https://www.aparat.com/alibaba.ir" className="copyright-link">
                        <TiSocialTwitter className="copyright-icon" />
                    </a>
                </div>
                </div>
            </div>
        </div>
    )
}
