<main class="page__main page__main--publication">
    <div class="container">
        <h1 class="page__title page__title--publication"><?= $post['title'] ?></h1>
        <section class="post-details">
            <h2 class="visually-hidden">Публикация</h2>
            <div class="post-details__wrapper post-<?= $post['class_name'] ?>">
                <div class="post-details__main-block post post--details">

                    <?php if ($post['class_name'] === 'quote'): ?>
                        <div class="post__main">
                            <blockquote>
                                <p><?= htmlspecialchars($post['text_content']) ?></p>
                                <cite><?= htmlspecialchars($post['quote_author']) ?></cite>
                            </blockquote>
                        </div>

                    <?php elseif ($post['class_name'] === 'link'): ?>
                        <div class="post__main">
                            <div class="post-link__wrapper">
                                <a class="post-link__external" href="http://<?= htmlspecialchars($post['link']) ?>" title="Перейти по ссылке">
                                    <div class="post-link__icon-wrapper">
                                        <img src="https://www.google.com/s2/favicons?domain=<?= htmlspecialchars(str_replace('www.', '', $post['link'])) ?>" alt="Иконка">
                                    </div>
                                    <div class="post-link__info">
                                        <h3><?= htmlspecialchars($post['title']) ?></h3>
                                        <span><?= htmlspecialchars($post['link']) ?></span>
                                    </div>
                                    <svg class="post-link__arrow" width="11" height="16">
                                        <use xlink:href="#icon-arrow-right-ad"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>

                    <?php elseif ($post['class_name'] === 'photo'): ?>
                        <div class="post__main">
                            <div class="post-details__image-wrapper post-photo__image-wrapper">
                                <img src="img/<?= htmlspecialchars($post['image']) ?>" alt="Фото от пользователя" width="760" height="507">
                            </div>
                        </div>

                    <?php elseif ($post['class_name'] === 'video'): ?>
                        <div class="post__main">
                            <div class="post-video__block">
                                <div class="post-video__preview">
                                    <?= embed_youtube_cover(htmlspecialchars($post['video'])); ?>
                                    <img src="img/coast-medium.jpg" alt="Превью к видео" width="760" height="507">
                                </div>
                                <div class="post-video__control">
                                    <button class="post-video__play post-video__play--paused button button--video" type="button">
                                        <span class="visually-hidden">Запустить видео</span></button>
                                    <div class="post-video__scale-wrapper">
                                        <div class="post-video__scale">
                                            <div class="post-video__bar">
                                                <div class="post-video__toggle"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="post-video__fullscreen post-video__fullscreen--inactive button button--video" type="button">
                                        <span class="visually-hidden">Полноэкранный режим</span></button>
                                </div>
                                <button class="post-video__play-big button" type="button">
                                    <svg class="post-video__play-big-icon" width="27" height="28">
                                        <use xlink:href="#icon-video-play-big"></use>
                                    </svg>
                                    <span class="visually-hidden">Запустить проигрыватель</span>
                                </button>
                            </div>
                        </div>

                    <?php elseif ($post['class_name'] === 'text'): ?>
                        <div class="post__main">
                            <p><?= htmlspecialchars($post['text_content']) ?></p>
                        </div>
                    <?php endif; ?>

                    <div class="post__indicators">
                        <div class="post__buttons">
                            <a class="post__indicator post__indicator--likes button" href="#" title="Лайк">
                                <svg class="post__indicator-icon" width="20" height="17">
                                    <use xlink:href="#icon-heart"></use>
                                </svg>
                                <svg class="post__indicator-icon post__indicator-icon--like-active" width="20" height="17">
                                    <use xlink:href="#icon-heart-active"></use>
                                </svg>
                                <span>250</span>
                                <span class="visually-hidden">количество лайков</span>
                            </a>
                            <a class="post__indicator post__indicator--comments button" href="#" title="Комментарии">
                                <svg class="post__indicator-icon" width="19" height="17">
                                    <use xlink:href="#icon-comment"></use>
                                </svg>
                                <span>25</span>
                                <span class="visually-hidden">количество комментариев</span>
                            </a>
                            <a class="post__indicator post__indicator--repost button" href="#" title="Репост">
                                <svg class="post__indicator-icon" width="19" height="17">
                                    <use xlink:href="#icon-repost"></use>
                                </svg>
                                <span>5</span>
                                <span class="visually-hidden">количество репостов</span>
                            </a>
                        </div>
                        <span class="post__view">500 просмотров</span>
                    </div>
                    <ul class="post__tags">
                        <li><a href="#">#nature</a></li>
                        <li><a href="#">#globe</a></li>
                        <li><a href="#">#photooftheday</a></li>
                        <li><a href="#">#canon</a></li>
                        <li><a href="#">#landscape</a></li>
                        <li><a href="#">#щикарныйвид</a></li>
                    </ul>
                    <div class="comments">
                        <form class="comments__form form" action="#" method="post">
                            <div class="comments__my-avatar">
                                <img class="comments__picture" src="../img/userpic-medium.jpg" alt="Аватар пользователя">
                            </div>
                            <div class="form__input-section form__input-section--error">
                                <textarea class="comments__textarea form__textarea form__input" placeholder="Ваш комментарий"></textarea>
                                <label class="visually-hidden">Ваш комментарий</label>
                                <button class="form__error-button button" type="button">!</button>
                                <div class="form__error-text">
                                    <h3 class="form__error-title">Ошибка валидации</h3>
                                    <p class="form__error-desc">Это поле обязательно к заполнению</p>
                                </div>
                            </div>
                            <button class="comments__submit button button--green" type="submit">Отправить</button>
                        </form>
                        <div class="comments__list-wrapper">
                            <ul class="comments__list">
                                <li class="comments__item user">
                                    <div class="comments__avatar">
                                        <a class="user__avatar-link" href="#">
                                            <img class="comments__picture" src="../img/userpic-larisa.jpg" alt="Аватар пользователя">
                                        </a>
                                    </div>
                                    <div class="comments__info">
                                        <div class="comments__name-wrapper">
                                            <a class="comments__user-name" href="#">
                                                <span>Лариса Роговая</span>
                                            </a>
                                            <time class="comments__time" datetime="2019-03-20">1 ч назад</time>
                                        </div>
                                        <p class="comments__text">
                                            Красота!!!1!
                                        </p>
                                    </div>
                                </li>
                                <li class="comments__item user">
                                    <div class="comments__avatar">
                                        <a class="user__avatar-link" href="#">
                                            <img class="comments__picture" src="../img/userpic-larisa.jpg" alt="Аватар пользователя">
                                        </a>
                                    </div>
                                    <div class="comments__info">
                                        <div class="comments__name-wrapper">
                                            <a class="comments__user-name" href="#">
                                                <span>Лариса Роговая</span>
                                            </a>
                                            <time class="comments__time" datetime="2019-03-18">2 дня назад</time>
                                        </div>
                                        <p class="comments__text">
                                            Озеро Байкал – огромное древнее озеро в горах Сибири к северу от монгольской
                                            границы. Байкал
                                            считается самым глубоким озером в мире. Он окружен сетью пешеходных
                                            маршрутов, называемых Большой
                                            байкальской тропой. Деревня Листвянка, расположенная на западном берегу
                                            озера, – популярная
                                            отправная точка для летних экскурсий. Зимой здесь можно кататься на коньках
                                            и собачьих упряжках.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <a class="comments__more-link" href="#">
                                <span>Показать все комментарии</span>
                                <sup class="comments__amount">45</sup>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="post-details__user user">
                    <div class="post-details__user-info user__info">
                        <div class="post-details__avatar user__avatar">
                            <a class="post-details__avatar-link user__avatar-link" href="#">
                                <img class="post-details__picture user__picture" src="../img/<?= $post['avatar'] ?>" alt="Аватар пользователя">
                            </a>
                        </div>
                        <div class="post-details__name-wrapper user__name-wrapper">
                            <a class="post-details__name user__name" href="#">
                                <span><?= $post['login'] ?></span>
                            </a>
                            <time class="post-details__time user__time" datetime="<?= date_format(date_create($author['dt_add']), 'Y-m-d'); ?>"><?= print_date_diff($author['dt_add']); ?> на сайте</time>
                        </div>
                    </div>
                    <div class="post-details__rating user__rating">
                        <p class="post-details__rating-item user__rating-item user__rating-item--subscribers">
                            <span class="post-details__rating-amount user__rating-amount"><?= $number_of_author_followers ?></span>
                            <span class="post-details__rating-text user__rating-text"><?= get_noun_plural_form($number_of_author_followers, 'подписчик', 'подписчика', 'подписчиков') ?></span>
                        </p>
                        <p class="post-details__rating-item user__rating-item user__rating-item--publications">
                            <span class="post-details__rating-amount user__rating-amount"><?= $number_of_author_posts ?></span>
                            <span class="post-details__rating-text user__rating-text"><?= get_noun_plural_form($number_of_author_posts, 'публикация', 'публикации', 'публикаций') ?></span>
                        </p>
                    </div>
                    <div class="post-details__user-buttons user__buttons">
                        <button class="user__button user__button--subscription button button--main" type="button">
                            Подписаться
                        </button>
                        <a class="user__button user__button--writing button button--green" href="#">Сообщение</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</main>
