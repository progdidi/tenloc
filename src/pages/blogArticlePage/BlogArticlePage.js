import './blogArticlePage.scss';

import example from './example.png';
import example2 from './example2.png';
import example3 from './example3.png';

import BlogSection from '../../components/blogSection/BlogSection';

const BlogArticlePage = () => {
    return ( 
        <>
            <section className="article">
                <div className="container">
                    <div className="article__inner">
                        <h2 className="article__title page__title">Экскурсия в Выборг из Санкт-Петербурга с посещением замка и парка Монрепо</h2>

                        <p className="article__descr">Город Выборг находится на северо-востоке побережья Финского залива. Он был основан в 1293г. Историки до сих пор не пришли к единому мнению какое слово стало ключом к названию города. Одни говорят про славянское слово «Выбор», другие про старонорвежский язык.</p>

                        <img src={example} alt="" className="article__img" />

                        <p className="article__text">
                            Как бы то ни было в 1293г. Торгильс Кнутссон на Замковом острове велел построить надежную крепость, замок. Вот так и появился Выборг. Все это происходило во время одного из крестовых походов.
                        </p>

                        <h5 className="article__subtitle">Что посетим и увидим</h5>

                        <p className="article__text">
                            Выборг был в составе Швеции, Финляндии, СССР и России. Все это отразилось на его культуре, архитектуре, исторических артефактах, музеях. Добавьте сюда еще знаменитый парк Монрепо, и вы получите одно место культурного и познавательного отдыха. Мы подготовили для вас программу экскурсии, которая за 1 день даст вам возможность прикоснуться к величию Выборга.
                        </p>

                        <ul className="article__list">
                           <li className="article__list-item">
                                09:30 – Начало экскурсии в Выборг. Отправление из Санкт-Петербурга от Московского вокзала
                                Выборг. Экскурсия по Старому Городу. В Старом Городе вы увидите памятники архитектуры, которые сформировались за семь столетий и четырех национальных культур. Дом Горожанина, Костел Гиацинта, Дом купца Векрута и многое другое вы увидите в Старом Городе. Озвучена малая часть. Посещение лавки вкусностей «Wiborg» Лимонады, сувениры и знаменитый Выборгский крендель. Захватите парочку на память, от них невозможно оторваться.
                           </li>
                           <li className="article__list-item">
                             Посещение Выборгского замка (*Замок закрыт на реконструкцию до 2023 года, на экскурсии вы посетите другие места: Башня и площадь Ратуши, Дом горожанина!)
                           </li>
                           <li className="article__list-item">
                                Крепость посреди города, которая считается сердцем Выборга. Единственный в России памятник западноевропейского зодчества. Он сохранился до наших дней. Только представьте сколько времени прошло, если он относится к XIII веку.
                           </li>
                           <li className="article__list-item">
                                    Посещение ландшафтного парка «Монрепо»
                                Переводится как "Мое вдохновение", " Мой Покой". Знаменитый скальный музей-заповедник, который находится под охраной ЮНЕСКО.
                           </li>
                           <li className="article__list-item">
                                Прибытие в Санкт-Петербург. Окончание экскурсии в Выборг у Московского вокзала.
                                Приобретайте на нашем сайте билеты и увидимся на экскрусии! Маршрут и длительность экскурсии могут зависеть от дорожной ситуации, а также от авторской подачи гида. Например, в случае пробок на дороге, перекрытия проезжей части и при других форс-мажорных обстоятельствах. Пожалуйста, учитывайте это при планировании ваших поездок, так как в этих случаях продолжительность экскурсии может значительно увеличиться.
                           </li>
                        </ul>

                        <div className="article__gallery">
                            <img src={example2} alt="" className="article__img" />
                            <img src={example3} alt="" className="article__img" />
                        </div>

                        <p className="article__text">Как бы то ни было в 1293г. Торгильс Кнутссон на Замковом острове велел построить надежную крепость, замок. Вот так и появился Выборг. Все это происходило во время одного из крестовых походов.

                        Прибытие в Санкт-Петербург. Окончание экскурсии в Выборг у Московского вокзала.
                        Приобретайте на нашем сайте билеты и увидимся на экскрусии! Маршрут и длительность экскурсии могут зависеть от дорожной ситуации, а также от авторской подачи гида. Например, в случае пробок на дороге, перекрытия проезжей части и при других форс-мажорных обстоятельствах. Пожалуйста, учитывайте это при планировании ваших поездок, так как в этих случаях продолжительность экскурсии может значительно увеличиться.</p>
                    </div>
                    
                </div>
            </section>

            <BlogSection></BlogSection>
        </>
     );
}
 
export default BlogArticlePage;