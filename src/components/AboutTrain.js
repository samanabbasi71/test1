import React, { Component } from 'react'
import traincard1 from '../images/train-card1.jpg'
import traincard2 from '../images/train-card2.jpg'
import traincard3 from '../images/train-card3.jpg'
import traincard4 from '../images/train-card4.jpg'
import traincard5 from '../images/train-card5.jpg'
import traincard6 from '../images/train-card6.jpg'
import traincard7 from '../images/train-card7.jpg'
import traincard8 from '../images/train-card8.jpg'
import traincard9 from '../images/train-card9.jpg'
import traincard10 from '../images/train-card10.jpg'
import traincard11 from '../images/train-card11.jpg'
import traincard12 from '../images/train-card12.jpg'
import traincard13 from '../images/train-card13.jpg'
import traincard14 from '../images/train-card14.jpg'
import traincard15 from '../images/train-card15.jpg'
import traincard16 from '../images/train-card16.jpg'
import traincard17 from '../images/train-card17.jpg'
import traincard18 from '../images/train-card18.jpg'
import traincard19 from '../images/train-card19.jpg'
import traincard20 from '../images/train-card20.jpg'

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
                        بلیط قطار 
                        </h1>
                        <div className="about-train__about--text text-justify">
                            <p>هر کسی که یک بار با قطار سفر کرده باشد می‌داند که قطار امن است و همین موضوع آن را به یکی از مناسب‌ترین وسائل نقلیه برای سفر به مقاصد دور و نزدیک تبدیل کرده. در سفر با قطار می‌توانید بدون نگرانی از نوسانات شرایط جوی، کمبود سوخت، تصادفات و... لحظات آرامی را سپری کنید. در کنار این موارد، موسیقی ریتمیک حرکت قطار روی ریل به خودی خود موجب آرامش سرنشینان می‌شود؛ حتی بعضی از مسافران ادعا کرده‌اند که این ریتم منظم موجب می‌شود تا خواب راحت‌تری در قطار داشته باشند.</p>
                            <p>
                            علاوه بر امنیت، سفر با قطار مزایای دیگری هم دارد. قیمت مناسب، فضای صمیمی و راحت کوپه، صرف غذا در بوفه و قدم زدن در راهرو باعث می‌شود تا سخ
                            <span className={this.state.ShowMore? "read-more" : "show-more"}>...</span>
                            <span><strong onClick={this.handleShowMore} className={this.state.ShowMore? "read-more" : "read-more__btn"}>بیشتر بخوانید</strong></span>
                            <span className={this.state.ShowMore? "show-more" : "read-more"}>
                            تیِ مسیرهای طولانی به حداقل رسیده و خاطره خوشی از سفر در ذهن مسافر باقی بماند.
                            </span>
                            </p>
                            <p className={this.state.ShowMore? "show-more" : "read-more"}>
                            بیش از 90 سال از احداث راه‌آهن و اولین سفر با قطار در ایران می‌گذرد، اما بسیاری از مسافران با خدمات قطارهای شبکه‌ ریلی کشور آشنا نیستند. به همین منظور قصد داریم شما را با امکانات و خدمات قطارهای ایران آشنا کنیم تا هنگام خرید آنلاین بلیط قطار، انتخاب‌های بهتری داشته باشید.
                            </p>
                        </div>
                        </div>
                    </div>
                    {/* مجله 3 کارته */}
                    <div className="about-train__cards--container bg-grey">
                    <div className="about-train__cards mx-auto">
                        <div className="card about-train__card" >
                            <img src={traincard1} alt="" className="card-img-top about-train__card--img"/>
                            <div className="card-img-overlay">
                            <h5 className="card-title text-right about-train__card--title">خرید اینترنتی بلیط قطار</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text about-train__card--text text-justify">
                                خرید اینترنتی بلیط قطار مزایای زیادی دارد، از جمله: مقایسه‌ قیمت بلیط قطارهای مختلف، انتخاب دقیق ساعت حرکت قطار، انتخاب از بین قطارهای متنوع شرکت‌های ریلی، پرداخت سریع و آسان با کارت شتابی، استرداد کاملا آنلاین بلیط قطار، خرید مطمئن بلیط مقاصد پرسفر، رزرو آسان بلیط قطار در فصل‌های شلوغ و مطلع شدن از پیش‌فروش قطارها از طریق ایمیل. شما به راحتی می‌توانید با مراجعه به
                                    <a href="https://www.alibaba.ir/" target="_blank" className="about-train__card--link"> www.alibaba.ir </a>
                                    بلیط قطار خود را به آسانی و با چند کلیک ساده خریداری کنید.
                                </p>
                            </div>
                        </div>
                        <div className="card about-train__card" >
                            <img src={traincard2} alt="" className="card-img-top about-train__card--img"/>
                            <div className="card-img-overlay">
                            <h5 className="card-title text-right about-train__card--title">خرید اینترنتی بلیط قطار</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text about-train__card--text text-justify">
                                در گذشته، استرداد بلیط قطار از دغدغه‌های اصلی مسافران بود. حتی مسافرانی که بلیط را آنلاین می‌خریدند، برای استرداد آن مجبور بودند به صورت حضوری به دفاتر فروش مراجعه کنند. علی‌بابا با فراهم کردن زیرساخت‌های لازم، خدمت استرداد آنلاین بلیط قطار را به مسافران ارائه می‌کند و شما با مراجعه به حساب کاربری خود در علی بابا با چند کلیک ساده می‌توانید بلیط را به صورت کاملا آنلاین استرداد کنید و مبلغ آن را (پس از کسر جریمه‌ کنسلی) در حساب بانکی‌تان دریافت کنید.
                                </p>
                            </div>
                        </div>
                        <div className="card about-train__card" >
                            <img src={traincard3} alt="" className="card-img-top about-train__card--img"/>
                            <div className="card-img-overlay">
                            <h5 className="card-title text-right about-train__card--title">خرید اینترنتی بلیط قطار</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text about-train__card--text text-justify">
                                یکی از دغدغه‌های مسافران قطار، امکان رزرو بلیط برای سفرهای خانوادگی و گروهی است. مشتریان علی‌بابا می‌توانند تا سقف 18 بلیط برای 18 نفر را در یک سفارش و با یک بار پرداخت خریداری کنند. همچنین در صورتی که قصد خرید بلیط برای تعداد مسافران بیشتری را داشته باشید و می‌خواهید صندلی‌هایتان در کنار هم باشد، کافیست با پشتیبانی علی‌بابا تماس بگیرید. در کنار همه این‌ها، استرداد هر تعداد بلیط در علی‌بابا به راحتی و در کمترین زمان ممکن انجام می‌شود.
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* درباره با گزینه بیشتر بخوانید */}
                    <div className="about-train__about">
                    <div className="about-train__about--container">
                        <h1 className="about-train__about--title text-center mb-5">
                        قیمت بلیط قطار 
                        </h1>
                        <div className="about-train__about--text text-justify">
                            <p>هر کسی که یک بار با قطار سفر کرده باشد می‌داند که قطار امن است و همین موضوع آن را به یکی از مناسب‌ترین وسائل نقلیه برای سفر به مقاصد دور و نزدیک تبدیل کرده. در سفر با قطار می‌توانید بدون نگرانی از نوسانات شرایط جوی، کمبود سوخت، تصادفات و... لحظات آرامی را سپری کنید. در کنار این موارد، موسیقی ریتمیک حرکت قطار روی ریل به خودی خود موجب آرامش سرنشینان می‌شود؛ حتی بعضی از مسافران ادعا کرده‌اند که این ریتم منظم موجب می‌شود تا خواب راحت‌تری در قطار داشته باشند.</p>
                            <p>
                            علاوه بر امنیت، سفر با قطار مزایای دیگری هم دارد. قیمت مناسب، فضای صمیمی و راحت کوپه، صرف غذا در بوفه و قدم زدن در راهرو باعث می‌شود تا سخ
                            <span className={this.state.ShowMore? "read-more" : "show-more"}>...</span>
                            <span><strong onClick={this.handleShowMore} className={this.state.ShowMore? "read-more" : "read-more__btn"}>بیشتر بخوانید</strong></span>
                            <span className={this.state.ShowMore? "show-more" : "read-more"}>
                            تیِ مسیرهای طولانی به حداقل رسیده و خاطره خوشی از سفر در ذهن مسافر باقی بماند.
                            </span>
                            </p>
                            <p className={this.state.ShowMore? "show-more" : "read-more"}>
                            بیش از 90 سال از احداث راه‌آهن و اولین سفر با قطار در ایران می‌گذرد، اما بسیاری از مسافران با خدمات قطارهای شبکه‌ ریلی کشور آشنا نیستند. به همین منظور قصد داریم شما را با امکانات و خدمات قطارهای ایران آشنا کنیم تا هنگام خرید آنلاین بلیط قطار، انتخاب‌های بهتری داشته باشید.
                            </p>
                        </div>
                    </div>
                </div>
                    {/* درباره خاکستری */}
                    <div className="about-train__about bg-grey">
                    <div className="about-train__about--container">
                        <h1 className="about-train__about--title text-center mb-5">
                        رزرو بلیط قطار 
                        </h1>
                        <div className="about-train__about--text text-justify">
                            <p>رزرو بلیط قطار، سفر با قطار را راحت‌تر از همیشه کرده است. برای خرید اینترنتی بلیط قطار کافی است وارد وب‌سایت علی‌بابا شوید، سپس با وارد کردن نام شهر مبدا و مقصد و تاریخ رفت و برگشت می‌توانید تمام قطارهای شرکت‌های ریلی در مسیر مورد نظرتان را مشاهده کنید. </p>
                            <p>بسته به ساعت حرکت، امکانات قطار و بودجه می‌توانید مناسب‌ترین بلیط را انتخاب کنید و با نهایی کردن رزرو بلیط قطار و پرداخت آن، بلیط خود را به صورت آنلاین دریافت کنید.</p>
                        </div>
                    </div>
                    </div>
                    {/* کارت 4 کارته */}
                    <div className="about-train__cards--container bg-white">
                    <div className="about-train__cards--four mx-auto">
                        <div className="card about-train__card" >
                            <img src={traincard4} alt="about train" className="card-img-top about-train__card--img"/>
                            <div className="card-img-overlay">
                            <h5 className="card-title text-right about-train__card--title">کوپه دربست در قطار</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text about-train__card--text text-justify">
                                یکی از تفاوت‌های قطار با سایر وسائل نقلیه عمومی کوپه‌های دربست آن است. شما می‌توانید کوپه‌های چهارنفره و شش‌نفره را دربست کنید تا به همراه خانواده یا دوستان خود سفر راحت‌تری را تجربه کنید. دربست کردن کوپه اصلا کار سختی نیست و در طی فرایند خرید اینترنتی بلیط از سایت علی بابا می‌توانید به آسانی بلیط قطار خود را به صورت دربست خریداری کنید. اگر گروهی سفر می‌کنید و یا اگر کودکان کم‌سن‌وسال همراه شما هستند، کوپه‌های دربست را به شما پیشنهاد می‌کنیم.
                                </p>
                            </div>
                        </div>
                        <div className="card about-train__card" >
                            <img src={traincard5} alt="" className="card-img-top about-train__card--img"/>
                            <div className="card-img-overlay">
                            <h5 className="card-title text-right about-train__card--title">بلیط قطار برای سفرهای دانشجویی</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text about-train__card--text text-justify">
                                سفر با قطار ارزان است و همین موضوع باعث می‌شود تا مورد توجه دانشجویان باشند. به طور معمول دانشجویانی که در شهرهای غیربومی تحصیل می‌کنند به صورت پرتکرار سفر می‌کنند و ماهانه حداقل یک بار به شهر خودشان باز می‌گردند که قطار یکی از انتخاب‌های اصلی آنهاست؛ چرا که هم قیمت به‌صرفه‌ای دارد و هم سفر راحتی را تجربه خواهند کرد.
                                </p>
                            </div>
                        </div>
                        <div className="card about-train__card" >
                            <img src={traincard6} alt="" className="card-img-top about-train__card--img"/>
                            <div className="card-img-overlay">
                            <h5 className="card-title text-right about-train__card--title">خرید بلیط قطار برای مسیرهای پرتردد از علی‌بابا</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text about-train__card--text text-justify">
                                علی‌بابا با ارائه ظرفیت کامل بر روی مسیرهای پرتردد مثل تهران – مشهد – تهران، اصفهان – تهران – اصفهان، یزد – تهران – یزد، تهران – شیراز – تهران و... امکان خرید سریع و آسان بلیط قطار، به ویژه در ایام اوج سفر مثل نوروز و تابستان را فراهم می‌کند. شما با مراجعه به سامانه علی‌بابا یا نصب اپلیکیشن اندروید یا ios علی‌بابا می‌توانید با خیال راحت بلیط سفرهای ریلی خود را از علی‌بابا خریداری کنید
                                </p>
                            </div>
                        </div>
                        <div className="card about-train__card" >
                            <img src={traincard7} alt="" className="card-img-top about-train__card--img"/>
                            <div className="card-img-overlay">
                            <h5 className="card-title text-right about-train__card--title">بلیط قطار تهران - مشهد </h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text about-train__card--text text-justify">
                                تهران - مشهد پرترددترین مسیر ریلی کشور است که قطارهای تمام شرکت‌های ریلی در این مسیر مسافران را جا‌به‌جا می‌کنند. حضور بارگاه امام رضا در مشهد، برگزاری سمینارها و همایش‌های مختلف و اجرای پروژه‌های تجاری، این مسیر را به یکی از پررونق‌ترین مسیرهای ریلی تبدیل کرده است. در سفرهای زیارتی، که اغلب گروهی و به صورت خانوادگی انجام می‌شود، استقبال از قطار بسیار زیاد است. قیمت بلیط قطار تهران - مشهد بسته به نوع قطار و شرکت ریلی متفاوت است و تقریبا برای تمام سلیقه‌ها از قطارهای لوکس گرفته تا قطارهای اتوبوسی، بلیط متناسب با نوع سفر را می‌توان پیدا کرد.
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* درباره شرکت های ریلی */}
                    <div className="about-train__about bg-grey">
                    <div className="about-train__about--container">
                        <h1 className="about-train__about--title text-center mb-5">
                        شرکت‌های ریلی در ایران 
                        </h1>
                        <div className="about-train__about--text text-justify">
                            <p>
                            به صورت کلی شرکت رجا و شرکت‌های زیرمجموعه سفیر و شرکت فدک، تامین‌کنندگان قطارهای خطوط ریلی ایران هستند و علی‌بابا بخش اعظمی از بلیط این شرکت‌ها را از طریق سامانه علی‌بابا به متقاضیان عرضه می‌کند. شرکت‌های زیرمجموعه سفیر عبارتند از: راه آهن شرقی بنیاد (بن ریل)، جوپار، ریل سیر کوثر، ریل ترابر سبا، مهتاب سیر جم (مهتاب)، قطارهای مسافری نور (نورالرضا)، رعد و پارس لاریم.
                            </p>
                        </div>
                    </div>
                    </div>
                    {/* لینک قطار ها 8 کارته */}
                    <div className="about-train__cards--container hide-under__768 bg-white">
                    <div className="about-train__cards--four mx-auto">
                        <div className="card about-train__card" >
                            <img src={traincard8} alt="" className="card-img-top about-train__card--img"/>
                            <div className="card-body">
                                <a href="https://www.alibaba.ir/rajatrain" target="_blank" className="about-train__card--link">
                                    <h5 className="card-text text-justify">قطارهای رجا</h5>
                                </a>
                            </div>
                        </div>
                        <div className="card about-train__card" >
                            <img src={traincard9} alt="" className="card-img-top about-train__card--img"/>
                            <div className="card-body">
                                <a href="https://www.alibaba.ir/bonrail" target="_blank" className="about-train__card--link">
                                    <h5 className="card-text text-justify">قطارهای بن‌ریل</h5>
                                </a>
                            </div>
                        </div>
                        <div className="card about-train__card" >
                            <img src={traincard10} alt="" className="card-img-top about-train__card--img"/>
                            <div className="card-body">
                                <a href="https://www.alibaba.ir/fadaktrain" target="_blank" className="about-train__card--link">
                                    <h5 className="card-text text-justify">قطارهای نوآفرین (فدک)</h5>
                                </a>
                            </div>
                        </div>
                        <div className="card about-train__card" >
                            <img src={traincard11} alt="" className="card-img-top about-train__card--img"/>
                            <div className="card-body">
                                <a href="https://www.alibaba.ir/nour-train" target="_blank" className="about-train__card--link">
                                    <h5 className="card-text text-justify">قطارهای مسافری نور</h5>
                                </a>
                            </div>
                        </div>
                        <div className="card about-train__card" >
                            <img src={traincard12} alt="" className="card-img-top about-train__card--img"/>
                            <div className="card-body">
                                <a  className="about-train__card--link">
                                    <h5 className="card-text text-justify">قطارهای ریل‌ سیر کوثر</h5>
                                </a>
                            </div>
                        </div>
                        <div className="card about-train__card" >
                            <img src={traincard13} alt="" className="card-img-top about-train__card--img"/>
                            <div className="card-body">
                                <a  className="about-train__card--link">
                                    <h5 className="card-text text-justify">قطارهای مهتاب سیر جم</h5>
                                </a>
                            </div>
                        </div>
                        <div className="card about-train__card" >
                            <img src={traincard14} alt="" className="card-img-top about-train__card--img"/>
                            <div className="card-body">
                                <a  className="about-train__card--link">
                                    <h5 className="card-text text-justify">قطارهای ریل ترابر سبا</h5>
                                </a>
                            </div>
                        </div>
                        <div className="card about-train__card" >
                            <img src={traincard15} alt="" className="card-img-top about-train__card--img"/>
                            <div className="card-body">
                                <a  className="about-train__card--link ">
                                    <h5 className="card-text text-justify">قطارهای جوپار </h5>
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* about bg greey******************** */}
                    <div className="about-train__about bg-grey">
                    <div className="about-train__about--container">
                        <h1 className="about-train__about--title text-center mb-5">
                        مسیرها و امکانات قطارهای ایران  
                        </h1>
                        <div className="about-train__about--text text-justify">
                            <p>
                            قطارهای مسافری به دو دسته کلی تقسیم می‌شوند: قطارهای سالنی و کوپه‌ای. با توجه به ظرفیت هر قطار، قطارهای کوپه‌ای شامل کوپه‌های چهار و شش نفره می‌شوند که صندلی‌های کوپه به صورت تخت باز می‌شوند. برخی از قطارهای کوپه‌ای از نوع کوپه‌صندلی هستند که صندلی‌ها در این قطارها قابلیت تخت شدن ندارند. نوع واگن قطارهای کوپه شامل غزال بنیاد، سروش بنیاد (پارس)، پرستو، پلور سبز، سفیر، پارسی، سبز، سیمرغ، زندگی، نگین، غدیر و خلیج فارس هستند. بسته به ظرفیت قطارهای سالنی، در هر ردیف سه یا چهار صندلی وجود دارد. نوع واگن این قطارها شامل قطارهای صبا اتوبوسی و پردیس سالنی است. علاوه بر مسیرهای حومه‌ای، قطارهای اتوبوسی در مسیرهای تهران - مشهد – تهران، تهران – قم - تهران، تهران – میانه - تهران و تهران – یزد - تهران نیز تردد دارند.
                            </p>
                        </div>
                    </div>
                    </div>
                    {/* about train  */}
                    <div className="aboutiran hide-under__768">
        <div className="aboutiran__container">
            <h1 className="aboutiran-title text-center mb-4">
            قطارهای رجا 
            </h1>
            <p className="aboutiran-text text-justify">
            در ابتدای شروع فعالیت صنعت ریلی در کشور، حمل مسافر و بار تفکیک نشده بود و این خدمات را راه آهن ایران ارائه می‌داد. در سال 1376 بخش خدمات مسافری صنعت ریلی کشور به شرکت رجا واگذار شد. این شرکت در ابتدا زیرمجموعه بخش دولتی بود و در سال 1388 به بخش خصوصی واگذار شد.
            </p>
            <p className="aboutiran-text text-justify">
            تنوع قطارهای شرکت رجا گزینه‌های مختلفی را بر اساس امکانات، خدمات و کیفیت در اختیار مسافران قرار می‌دهند. این قطارها به انواع قطارهای چهار تخته، قطارهای شش تخته، قطارهای سالنی و قطار مجلل زندگی تقسیم می‌شوند.                
            </p>
            <h5 className="aboutiran-title text-right">
            قطارهای چهار تخته رجا 
            </h5>
            <p className="aboutiran-text text-justify">
            قطارهای چهار تخته رجا انواع مختلفی دارند و به قطارهای ویژه شامل قطارهای زندگی، سیمرغ و سبز، کلاس یک شامل قطارهای غزال و پلور سبز، کلاس دو شامل قطارهای لوکس چهار تخته و البرز و کلاس سه شامل قطار خلیج فارس تقسیم می‌شوند.
            </p>
            <h5 className="aboutiran-title text-right">
            قطارهای سالنی رجا
            </h5>
            <p className="aboutiran-text text-justify">
            قطارهای سالنی رجا در مقایسه با سایر قطارهای آن قیمت مناسب‌تری دارد و برای کسانی که سفرهای مقرون به صرفه را ترجیح می‌دهند گزینه بسیار مناسبی است. دسته‌بندی این قطارها شامل کلاس ویژه (تندروی پردیس)، کلاس یک (صبا و ارم) و کلاس سه (اتوبوسی، دو طبقه مترویی و معمولی صندلی) می‌شود.
            </p>
            <h5 className="aboutiran-title text-right">
            قطارهای شش تخته رجا
            </h5>
            <p className="aboutiran-text text-justify">
            قطارهای شش تخته رجا برای سفرهای دسته جمعی و گروهی هم از لحاظ فضا و هم قیمت بسیار مناسب هستند. این قطارها به سه کلاس تقسیم می‌شوند و کلاس یک شامل قطار میلاد، کلاس دو شامل قطار پارسی و زاگرس و کلاس سه شامل قطار شش تخته تبدیلی می‌شود.
            </p>
            <h5 className="aboutiran-title text-right">
            قطار مجلل زندگی رجا
            </h5>
            <p className="aboutiran-text text-justify">
            قطار مجلل زندگی به روزترین و لوکس‌ترین قطاری است که شرکت ریلی رجا وارد ناوگان ریلی کشور کرده است و برای کسانی که ترس از پرواز دارند و سفرهای لوکس و راحت را ترجیح می‌دهند انتخابی ایده‌آل است، چرا که ظاهر قطار زندگی و امکانات کوپه‌های چهار نفره آن بسیار متفاوت است. 
            </p>
            <p className="aboutiran-text text-justify">
            به محض ورود با نوشیدنی خوشامدگویی از مهمانان پذیرایی می‌شود و دمپایی راحتی برای تردد در راهرو در اختیار آن‌ها قرار می‌گیرد. هر کوپه مجهز به دو مانیتور 18 اینچ است که مسافران می‌توانند از آرشیو فیلم و موسیقی آن با استفاده از هدفون‌هایی که در اختیار آن‌ها قرار می‌گیرد استفاده کنند.
            </p>
            <p className="aboutiran-text text-justify">
            وب‌سایت علی‌بابا امکان خرید و استرداد آنلاین تمام قطارهای شرکت ریلی رجا را فراهم کرده است و مسافران می‌توانند در کمتر از دو دقیقه بلیط قطار مورد نظر را جستجو و خرید خود را نهایی کنند.
            </p>
            <div className="about-train__aboutimg mt-5">
                <img src={traincard16} alt="train" className="about-train__aboutimg--img"/>
            </div>
        </div>
        </div>
        {/* abou train bg grey */}
        <div className="aboutiran hide-under__768 bg-grey">
        <div className="aboutiran__container">
            <h1 className="aboutiran-title text-center mb-4">
            قطارهای سفیر 
            </h1>
            <p className="aboutiran-text text-justify">
            در ابتدای شروع فعالیت صنعت ریلی در کشور، حمل مسافر و بار تفکیک نشده بود و این خدمات را راه آهن ایران ارائه می‌داد. در سال 1376 بخش خدمات مسافری صنعت ریلی کشور به شرکت رجا واگذار شد. این شرکت در ابتدا زیرمجموعه بخش دولتی بود و در سال 1388 به بخش خصوصی واگذار شد.
            </p>
            <p className="aboutiran-text text-justify">
            تنوع قطارهای شرکت رجا گزینه‌های مختلفی را بر اساس امکانات، خدمات و کیفیت در اختیار مسافران قرار می‌دهند. این قطارها به انواع قطارهای چهار تخته، قطارهای شش تخته، قطارهای سالنی و قطار مجلل زندگی تقسیم می‌شوند.                
            </p>
            <h5 className="aboutiran-title text-right">
            قطارهای چهار تخته رجا 
            </h5>
            <p className="aboutiran-text text-justify">
            قطارهای چهار تخته رجا انواع مختلفی دارند و به قطارهای ویژه شامل قطارهای زندگی، سیمرغ و سبز، کلاس یک شامل قطارهای غزال و پلور سبز، کلاس دو شامل قطارهای لوکس چهار تخته و البرز و کلاس سه شامل قطار خلیج فارس تقسیم می‌شوند.
            </p>
            <h5 className="aboutiran-title text-right">
            قطارهای سالنی رجا
            </h5>
            <p className="aboutiran-text text-justify">
            قطارهای سالنی رجا در مقایسه با سایر قطارهای آن قیمت مناسب‌تری دارد و برای کسانی که سفرهای مقرون به صرفه را ترجیح می‌دهند گزینه بسیار مناسبی است. دسته‌بندی این قطارها شامل کلاس ویژه (تندروی پردیس)، کلاس یک (صبا و ارم) و کلاس سه (اتوبوسی، دو طبقه مترویی و معمولی صندلی) می‌شود.
            </p>
            <h5 className="aboutiran-title text-right">
            قطارهای شش تخته رجا
            </h5>
            <p className="aboutiran-text text-justify">
            قطارهای شش تخته رجا برای سفرهای دسته جمعی و گروهی هم از لحاظ فضا و هم قیمت بسیار مناسب هستند. این قطارها به سه کلاس تقسیم می‌شوند و کلاس یک شامل قطار میلاد، کلاس دو شامل قطار پارسی و زاگرس و کلاس سه شامل قطار شش تخته تبدیلی می‌شود.
            </p>
            <h5 className="aboutiran-title text-right">
            قطار مجلل زندگی رجا
            </h5>
            <p className="aboutiran-text text-justify">
            قطار مجلل زندگی به روزترین و لوکس‌ترین قطاری است که شرکت ریلی رجا وارد ناوگان ریلی کشور کرده است و برای کسانی که ترس از پرواز دارند و سفرهای لوکس و راحت را ترجیح می‌دهند انتخابی ایده‌آل است، چرا که ظاهر قطار زندگی و امکانات کوپه‌های چهار نفره آن بسیار متفاوت است. 
            </p>
            <p className="aboutiran-text text-justify">
            به محض ورود با نوشیدنی خوشامدگویی از مهمانان پذیرایی می‌شود و دمپایی راحتی برای تردد در راهرو در اختیار آن‌ها قرار می‌گیرد. هر کوپه مجهز به دو مانیتور 18 اینچ است که مسافران می‌توانند از آرشیو فیلم و موسیقی آن با استفاده از هدفون‌هایی که در اختیار آن‌ها قرار می‌گیرد استفاده کنند.
            </p>
            <p className="aboutiran-text text-justify">
            وب‌سایت علی‌بابا امکان خرید و استرداد آنلاین تمام قطارهای شرکت ریلی رجا را فراهم کرده است و مسافران می‌توانند در کمتر از دو دقیقه بلیط قطار مورد نظر را جستجو و خرید خود را نهایی کنند.
            </p>
            <div className="about-train__aboutimg mt-5">
                <img src={traincard17} alt="train" className="about-train__aboutimg--img"/>
            </div>
        </div>
        </div>
        {/*  مجله گردشگری قطار */}
        <div className="about-train__cards--container bg-white">
            <h1 className="aboutiran-title text-center">
                مجله سفر و گردشگری 
            </h1>
                    <div className="about-train__cards mx-auto">
                        <div className="card about-train__card" >
                            <img src={traincard18} alt="" className="card-img-top about-train__card--img"/>
                            <div className="card-body">
                                <a href="https://www.alibaba.ir/mag/how-to-travel-to-mashhad-at-the-lowest-cost/" target="_blank" className="about-train__card--link">
                                    <h5 className="card-text text-justify">چگونه با کمترین هزینه به مشهد سفر کنیم؟</h5>
                                </a>
                                <p className="card-text about-train__card--text text-justify mt-3">
                                اگر می‌خواهید بلیط قطار مشهد را خریداری کنید اما نگران هزینه‌اش هستید، این نوشتار را بخوانید. برای خرید بلیط ارزان قطار تهران‌ـ مشهد، گزینه‌های مختلفی مقابل شماست؛ از قطارهای اتوبوسی و کوپه‌‌ای.
                                </p>
                            </div>
                        </div>
                        <div className="card about-train__card" >
                            <img src={traincard19} alt="" className="card-img-top about-train__card--img"/>
                            <div className="card-body">
                                <a href="https://www.alibaba.ir/mag/luxtury-budget-friendly-trains-tehran-mashad-railway/" target="_blank"  className="about-train__card--link" >
                                    <h5 className="card-text text-justify">قطارهای لوکس مسیر تهران-مشهد کدام‌ها هستند؟</h5>
                                </a>
                                <p className="card-text about-train__card--text text-justify mt-3">
                                اگر چه اغلب شرکت‌های ریلی در مسیر پر تردد تهران-مشهد قطار دارند،قطار 5 ستاره فدک، قطار زندگی، غزال vip، قطار نورالرضا و غدیر بهترین قطارهای این مسیر هستند.
                                </p>
                            </div>
                        </div>
                        <div className="card about-train__card" >
                            <img src={traincard20} alt="" className="card-img-top about-train__card--img"/>
                            <div className="card-body">
                                <a href="https://www.alibaba.ir/mag/why-buy-train-tickets-online/" target="_blank" className="about-train__card--link">
                                    <h5 className="card-text text-justify">چرا بلیط قطار را آنلاین بخریم؟</h5>
                                </a>
                                <p className="card-text text-justify about-train__card--text mt-3">
                                خرید آنلاین بلیط قطار کار را برای سفر با این وسیله نقلیه ریلی آسان ساخته است. اگر قصد سفر را دارید، می‌توانید با خرید آنلاین بلیط قطار در زمان و هزینه صرفه‌جویی کنید.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
