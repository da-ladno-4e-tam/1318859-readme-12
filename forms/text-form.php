<?php
$form = [
    'title' => 'Форма добавления текста',
    'inputs' => [
        [
            'title' => 'Заголовок',
            'required' => true,
            'type' => 'text',
            'name' => 'heading',
            'placeholder' => 'Введите заголовок',
            'field_type' => 'input',
            'checks' => [
                0 => function ($current_tab, $input) {
                    return validateFilled($current_tab . '-' . $input['name']);
                }
            ]
        ],
        [
            'title' => 'Текст поста',
            'required' => true,
            'type' => 'textarea',
            'name' => 'post',
            'placeholder' => 'Введите текст публикации',
            'field_type' => 'textarea',
            'checks' => [
                0 => function ($current_tab, $input) {
                    return validateFilled($current_tab . '-' . $input['name']);
                }
            ]
        ],
        [
            'title' => 'Теги',
            'required' => false,
            'type' => 'text',
            'name' => 'tags',
            'placeholder' => 'Введите теги',
            'field_type' => 'input',
        ],
    ],
];
