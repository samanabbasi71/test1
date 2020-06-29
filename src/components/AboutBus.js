import React, { Component } from 'react'
import buscard1 from '../images/bus-card1.png'
import buscard2 from '../images/bus-card2.png'
import buscard3 from '../images/bus-card3.png'
import buscard4 from '../images/bus-card4.png'
import buscard5 from '../images/bus-card5.png'

export default class AboutTrain extends Component {
    state = {
        ShowMore: false
    }

    handleShowMore = () => {
        this.setState({
            ShowMore: true
        })
    }

    render() {
        return (
            <div className="about-train__container">
                <div className="about-train">
                    {/* درباره با گزینه بیشتر بخوانید */}
                    <div className="about-train__about">
                        <div className="about-train__about--container">
                        <h1 className="about-train__about--title text-center mb-5">
                        بلیط اتوبوس
                        </h1>
                        <div className="about-train__about--text text-justify">
                            <p>سفر با اتوبوس به دلیل پایین آوردن هزینه‌ها و البته راحتی و امنیت بالا مورد استقبال مسافران است. با توسعه فناوری‌های نوین و ایجاد رفتار خرید اینترنتی، دیگر نیازی نیست برای خرید بلیط اتوبوس به ترمینال شرق و سایر ترمینال‌های اتوبوس‌رانی مراجعه کنید.</p>
                            <p>
                            علی‌بابا با توجه به اعتبار و پیشینه‌ای که در زمینه عرضه بلیط سفر و سایر خدمات گردشگری دارد، بهترین وب‌سایت رزرو بلیط اتوبوس است. شما می‌توانید در علی‌بابا بهترین قیمت را برای خرید بلیط اتوبوس پیدا کنید؛ همچنین این امکان را دارید تا از بین شرکت‎‌های اتوبوس‌رانی مختلف دست به انتخاب
                            <span className={this.state.ShowMore? "read-more" : "show-more"}>...</span>
                            <span><strong onClick={this.handleShowMore} className={this.state.ShowMore? "read-more" : "read-more__btn"}>بیشتر بخوانید</strong></span>
                            <span className={this.state.ShowMore? "show-more" : "read-more"}>
                            بزنید.
                            </span>
                            </p>
                            <p className={this.state.ShowMore? "show-more" : "read-more"}>
                            علی‌بابا به عنوان مرجع فروش بلیط اینترنتی اتوبوس، تمام مسیرهای زمینی داخل کشور و تعدادی از مسیرهای خارجی را پوشش می‌دهد.
                            </p>
                            <p className={this.state.ShowMore? "show-more" : "read-more"}>
                            در دسترس بودن لیست کاملی از شرکت‌های اتوبوس‌رانی در سایت علی‌بابا امکان خرید آنلاین بلیط اتوبوس را با قیمت مناسب برای شما ممکن می‌سازد.
                            </p>
                            <p className={this.state.ShowMore? "show-more" : "read-more"}>
                            از طرف دیگر اگر ترجیح شما رفاه و آرامش بیشتر در طول سفر است، می‌توانید بلیط اتوبوسی را بخرید که اگرچه قیمتش کمی بیشتر است، اما از امکانات رفاهی بیشتری نیز برخوردار است و سفر را برای شما دلپذیرتر می‌کند.
                            </p>
                            <p className={this.state.ShowMore? "show-more" : "read-more"}>
                            ضمنا شما هنگام خرید آنلاین بلیط اتوبوس از علی‌بابا، علاوه بر انتخاب صندلی، می‌توانید طول مسیر، ساعت حرکت و قوانین استرداد بلیط را نیز مشاهده کنید.
                            </p>
                        </div>
                        </div>
                    </div>
                    {/* مجله 3 کارته */}
                    <div className="about-train__cards--container bg-white">
                    <div className="about-train__cards mx-auto">
                        <div className="card about-train__card" >
                            <img src={buscard1} alt="" className="card-img-top about-train__card--img"/>
                            <div className="card-img-overlay">
                            <h5 className="card-title text-right about-train__card--title">خرید بلیط اتوبوس</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text mb-0 about-train__card--text text-justify">
                                خرید اینترنتی بلیط اتوبوس، مسافران را از اینکه خیلی زودتر در ترمینال حضور داشته باشند، بی‌نیاز ساخته است. شما می‌توانید همین طور که در خانه نشسته‌اید، خرید بلیط برای اتوبوس را انجام دهید.
                                </p>
                                <p className="card-text mb-0  about-train__card--text text-justify">
                                برای اینکه سفر را برای خود راحت‌تر و لذت‌بخش‌تر کنید، می‌توانید برای خرید بلیط VIP اقدام کنید. اگرچه قیمت بلیط اتوبوس VIP کمی گران‌تر است، اما ارزشش را دارد. ضمنا با خرید بلیط رویال سفر هم سفری بی‌دردسر را تجربه خواهید کرد، چرا که این شرکت هم شرایط رفاهی قابل‌قبولی برای مسافران فراهم می‌کند.
                                </p>
                                <p className="card-text about-train__card--text text-justify">
                                هنگام خرید آنلاین بلیط اتوبوس از علی‌بابا کاربران این امکان را خواهند داشت که از میان شرکت‌های موجود، مناسب‌ترین انتخاب را برای خود داشته باشند.
                                </p>
                            </div>
                        </div>
                        <div className="card about-train__card" >
                            <img src={buscard2} alt="" className="card-img-top about-train__card--img"/>
                            <div className="card-img-overlay">
                            <h5 className="card-title text-right about-train__card--title">خرید اینترنتی بلیط قطار</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text mb-0 about-train__card--text text-justify">
                                رزرو بلیط راهکاری دوراندیشانه و عاقلانه برای کسانی است که می‌خواهند از زمان‌بندی سفرشان مطمئن باشند. این موضوع زمانی اهمیت بیشتری می‌یابد که بخواهید بلیط را برای زمان‌های پرسفر رزرو کنید. راحت‌ترین روش، رزرو اینترنتی بلیط اتوبوس از سایت علی‌بابا است.
                                </p>
                                <p className="card-text about-train__card--text text-justify">
                                به این ترتیب می‌توانید ساعت حرکت و شرکت اتوبوس‌رانی موردنظرتان را انتخاب کنید. مراجعه به یک سایت رزرو بلیط‌های اتوبوس معتبر نظیر علی‌بابا، خیال شما را از تهیه بلیط اتوبوس برای تاریخ موردنظرتان آسوده می‌کند. امکاناتی نظیر مشاهده مسافت و قوانین استرداد و البته طول مسافت، علی‌بابا را به بهترین سامانه رزرو بلیط اتوبوس تبدیل کرده است.
                                </p>
                            </div>
                        </div>
                        <div className="card about-train__card" >
                            <img src={buscard3} alt="" className="card-img-top about-train__card--img"/>
                            <div className="card-img-overlay">
                            <h5 className="card-title text-right about-train__card--title">خرید اینترنتی بلیط قطار</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text mb-0 about-train__card--text text-justify">
                                همان طور که اشاره شد، ارزان بودن قیمت بلیط نسبت به سایر وسایل نقلیه بین‌شهری، یکی از انگیزه‌های اصلی مردم برای سفر با اتوبوس است. عوامل متعددی در تعیین قیمت بلیط‌های اتوبوس موثرند که از مهم‌ترین آن‌ها می‌توان به طول سفر و امکانات اتوبوس اشاره کرد.
                                </p>
                                <p className="card-text mb-0 about-train__card--text text-justify">
                                اما اگر به دنبال استعلام قیمت بلیط اتوبوس برای یک یا چند مسیر هستید، می‌توانید به علی‌بابا مراجعه کنید. کافی است مبدا، مقصد و زمان سفر را مشخص کنید تا لیست کاملی از قیمت بلیط اتوبوس شرکت‌های مختلف را مشاهده کنید.
                                </p>
                                <p className="card-text about-train__card--text text-justify">
                                ضمنا قیمت بلیط VIP را نیز می‌توانید در همین لیست ببینید. اگر هم به دنبال بلیط اتوبوس ارزان هستید، می‌توانید در تنظیمات بالای صفحه، بلیط‌ها را براساس کمترین قیمت تعیین کنید.
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* درباره با گزینه بیشتر بخوانید */}
                    <div className="about-train__about">
                    <div className="about-train__about--container">
                        <h1 className="about-train__about--title text-center mb-5">
                        استرداد بلیط اتوبوس 
                        </h1>
                        <div className="about-train__about--text text-justify">
                            <p>
                            طبیعی است که گاهی اوقات، سفرتان به هر دلیلی لغو شود. در این زمان به دنبال استرداد بلیط (کنسلی) هستید. اگر بلیط‌تان را از علی‌بابا خریده‌اید، نگران نباشید؛ فرآیند استرداد بلیط اتوبوس در علی‌بابا راحت و بی‌دردسر است.
                            </p>
                            <p>
                            کافی است وارد حساب کاربری‌تان شوید و روی نام کاربری‌تان کلیک کنید. در لیست نمایش داده شده، روی سفارشات و استردادها کلیک کنید.
                            </p>
                            <p>
                            در صفحه بعد شماره سفارش خود را وارد و سپس روی جستجو کلیک کنید. پس از اتمام مراحل استرداد، پولی که بابت خرید بلیط پرداخته‌اید، در کوتاه‌ترین زمان ممکن به حساب شما برمی‌گردد.
زمانی که بلیط را می‌خرید ب
                            <span className={this.state.ShowMore? "read-more" : "show-more"}>...</span>
                            <span><strong onClick={this.handleShowMore} className={this.state.ShowMore? "read-more" : "read-more__btn"}>بیشتر بخوانید</strong></span>
                            <span className={this.state.ShowMore? "show-more" : "read-more"}>
                            لیط را می‌خرید به قوانین بلیط هم دقت کنید. قوانین استرداد را در همان پنجره بلیط، در بخش «اطلاعات بیشتر» مشاهده خواهید کرد. این قوانین به شما می‌گوید که جریمه استرداد یا کنسلی بلیط اتوبوس چه میزان است.
                            </span>
                            </p>
                        </div>
                    </div>
                </div>
                                    {/* مجله 3 کارته */}
                    <div className="about-train__cards--container two-card__container  bg-white">
                    <div className=" two-card  mx-auto">
                        <div className="card about-train__card" >
                            <img src={buscard4} alt="" className="card-img-top about-train__card--img"/>
                            <div className="card-img-overlay">
                            <h5 className="card-title text-right about-train__card--title">خرید بلیط اتوبوس</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text mb-0 about-train__card--text text-justify">
                                خرید اینترنتی بلیط اتوبوس، مسافران را از اینکه خیلی زودتر در ترمینال حضور داشته باشند، بی‌نیاز ساخته است. شما می‌توانید همین طور که در خانه نشسته‌اید، خرید بلیط برای اتوبوس را انجام دهید.
                                </p>
                                <p className="card-text mb-0  about-train__card--text text-justify">
                                برای اینکه سفر را برای خود راحت‌تر و لذت‌بخش‌تر کنید، می‌توانید برای خرید بلیط VIP اقدام کنید. اگرچه قیمت بلیط اتوبوس VIP کمی گران‌تر است، اما ارزشش را دارد. ضمنا با خرید بلیط رویال سفر هم سفری بی‌دردسر را تجربه خواهید کرد، چرا که این شرکت هم شرایط رفاهی قابل‌قبولی برای مسافران فراهم می‌کند.
                                </p>
                                <p className="card-text about-train__card--text text-justify">
                                هنگام خرید آنلاین بلیط اتوبوس از علی‌بابا کاربران این امکان را خواهند داشت که از میان شرکت‌های موجود، مناسب‌ترین انتخاب را برای خود داشته باشند.
                                </p>
                            </div>
                        </div>
                        <div className="card about-train__card" >
                            <img src={buscard5} alt="" className="card-img-top about-train__card--img"/>
                            <div className="card-img-overlay">
                            <h5 className="card-title text-right about-train__card--title">خرید اینترنتی بلیط قطار</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text mb-0 about-train__card--text text-justify">
                                رزرو بلیط راهکاری دوراندیشانه و عاقلانه برای کسانی است که می‌خواهند از زمان‌بندی سفرشان مطمئن باشند. این موضوع زمانی اهمیت بیشتری می‌یابد که بخواهید بلیط را برای زمان‌های پرسفر رزرو کنید. راحت‌ترین روش، رزرو اینترنتی بلیط اتوبوس از سایت علی‌بابا است.
                                </p>
                                <p className="card-text about-train__card--text text-justify">
                                به این ترتیب می‌توانید ساعت حرکت و شرکت اتوبوس‌رانی موردنظرتان را انتخاب کنید. مراجعه به یک سایت رزرو بلیط‌های اتوبوس معتبر نظیر علی‌بابا، خیال شما را از تهیه بلیط اتوبوس برای تاریخ موردنظرتان آسوده می‌کند. امکاناتی نظیر مشاهده مسافت و قوانین استرداد و البته طول مسافت، علی‌بابا را به بهترین سامانه رزرو بلیط اتوبوس تبدیل کرده است.
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* about train  */}
                    <div className="aboutiran">
        <div className="aboutiran__container">
            <h1 className="aboutiran-title text-center mb-4">
            شرکت‌های اتوبوس‌ رانی 
            </h1>
            <p className="aboutiran-text text-justify">
            در حال حاضر، شرکت‌های اتوبوس‌رانی متعددی وجود دارند که تمام مسیرهای داخل و برخی از مسیرهای خارج از کشور را پوشش می‌دهند. این شرکت‌ها در بسیاری از امکانات و خدمات مشترک‌اند و در عین حال تفاوت‌هایی با هم دارند.
            </p>
            <p className="aboutiran-text text-justify">
            زمانی که برای خرید بلیط اتوبوس جستجو می‌کنید، این شرکت‌ها گزینه‌های مختلفی برای شما دارند و می‌توانید با توجه به شرایط خود از بین آنها انتخاب کنید. در ادامه چند مورد از معروف‌ترین شرکت‌های اتوبوس‌رانی کشور را به شما معرفی می‌کنیم.
            </p>
            <h5 className="aboutiran-title text-right">
            ایران‌پیما
            </h5>
            <p className="aboutiran-text text-justify">
            ایران‌پیما یکی از معروف‌ترین و قدیمی‌ترین شرکت‌های اتوبوس‌رانی کشور است. از سال‌ها قبل ایران‌پیما در بیشتر شهرهای کشور نمایندگی داشته است. تا همین چند سال پیش بود که اتوبوس‌های بنز این شرکت را با رنگ قرمز و شکل خاص نوشته شدن ایران‌پیما روی بدنه اتوبوس تشخیص می‌دادیم؛ اما امروزه این شرکت اتوبوس‌رانی از اتوبوس‌هایی نظیر ولوو و اسکانیا نیز در ترکیب خود استفاده می‌کند. در حال حاضر بیشتر اتوبوس‌های شرکت ایران‌پیما از نوع VIP هستند.
            </p>
            <p className="aboutiran-text text-justify">
            شما می‌توانید به سادگی
<a href="https://www.alibaba.ir/iranpeyma" target="_blank" className="about-train__card--link"> بلیط اتوبوس ایران پیما </a>
و سایر شرکت‌ها را از علی‌بابا رزرو کنید.
            </p>
            <h5 className="aboutiran-title text-right">
            رویال سفر ایرانیان
            </h5>
            <p className="aboutiran-text text-justify">
            شرکت رویال سفر ایرانیان از سال 1385 کار خود را شروع کرد. می‌توان گفت با آغاز به کار رویال سفر بود که سطح سفرهای بین‌شهری با اتوبوس وارد مرحله جدیدی شد. اتوبوس‌های این شرکت با برخورداری از امکانات مدرن و به‌روز مسافران را با شکل جدیدی از سفر مواجه کرد. در حال حاضر، رویال سفر ایرانیان دارای 550 دستگاه اتوبوس VIP است. گفتنی است این شرکت در 50 شهر در داخل و خارج از کشور نمایندگی دارد.
شما می‌توانید به سادگی
<a href="https://www.alibaba.ir/royalsafar" target="_blank" className="about-train__card--link"> بلیط اتوبوس رویال سفر </a>
و سایر شرکت‌ها را از علی‌بابا رزرو کنید.
            </p>
            <h5 className="aboutiran-title text-right">
            سیر و سفر
            </h5>
            <p className="aboutiran-text text-justify">
            یکی دیگر از شرکت‌های اتوبوس‌رانی معروف کشور، سیر و سفر است. این شرکت اتوبوس‌رانی در سال 1369 آغاز به کار کرد و از آن سال تا به حال فعالیت‌های خود را توسعه داده است. بسیاری از اتوبوس‌های شرکت سیر و سفر از نوع VIP هستند و امکانات رفاهی مطلوبی برای مسافران به وجود می‌آورند.
            </p>
            <p className="aboutiran-text text-justify">
            شما می‌توانید به سادگی
<a href="https://www.alibaba.ir/seirosafar" target="_blank" className="about-train__card--link"> بلیط اتوبوس سیر و سفر </a>
و سایر شرکت‌ها را از علی‌بابا رزرو کنید.
            </p>
            <h5 className="aboutiran-title text-right">
            همسفر
            </h5>
            <p className="aboutiran-text text-justify">
            یکی دیگر از شرکت‌های اتوبوس‌رانی معروف کشور، سیر و سفر است. این شرکت اتوبوس‌رانی در سال 1369 آغاز به کار کرد و از آن سال تا به حال فعالیت‌های خود را توسعه داده است. بسیاری از اتوبوس‌های شرکت سیر و سفر از نوع VIP هستند و امکانات رفاهی مطلوبی برای مسافران به وجود می‌آورند.
            </p>
            <p className="aboutiran-text text-justify">
            شما می‌توانید به سادگی
<a href="https://www.alibaba.ir/hamsafar" target="_blank" className="about-train__card--link">  بلیط اتوبوس همسفر  </a>
و سایر شرکت‌ها را از علی‌بابا رزرو کنید.
            </p>
            <h5 className="aboutiran-title text-right">
            گیتی پیما
            </h5>
            <p className="aboutiran-text text-justify">
            یکی دیگر از شرکت‌های اتوبوس‌رانی معروف کشور، سیر و سفر است. این شرکت اتوبوس‌رانی در سال 1369 آغاز به کار کرد و از آن سال تا به حال فعالیت‌های خود را توسعه داده است. بسیاری از اتوبوس‌های شرکت سیر و سفر از نوع VIP هستند و امکانات رفاهی مطلوبی برای مسافران به وجود می‌آورند.
            </p>
            <p className="aboutiran-text text-justify">
            شما می‌توانید به سادگی
<a href="https://www.alibaba.ir/gitipeyma" target="_blank" className="about-train__card--link">  بلیط اتوبوس گیتی پیما </a>
و سایر شرکت‌ها را از علی‌بابا رزرو کنید.
            </p>
            <h5 className="aboutiran-title text-right">
            ماهان سفر
            </h5>
            <p className="aboutiran-text text-justify">
            یکی دیگر از شرکت‌های اتوبوس‌رانی معروف کشور، سیر و سفر است. این شرکت اتوبوس‌رانی در سال 1369 آغاز به کار کرد و از آن سال تا به حال فعالیت‌های خود را توسعه داده است. بسیاری از اتوبوس‌های شرکت سیر و سفر از نوع VIP هستند و امکانات رفاهی مطلوبی برای مسافران به وجود می‌آورند.
            </p>
            <p className="aboutiran-text text-justify">
            شما می‌توانید به سادگی
<a href="https://www.alibaba.ir/mahansafar" target="_blank" className="about-train__card--link">  بلیط اتوبوس ماهان سفر </a>
و سایر شرکت‌ها را از علی‌بابا رزرو کنید.
            </p>
        </div>
        </div>


                </div>
            </div>
        )
    }
}
