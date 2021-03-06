
# Тестовое задание
Тестовое задание на позицию frontend разработчика.

## Задача

В рамках данного тестового задание предполагается создание простого TODO листа, согласно  [макету](https://www.figma.com/file/HeNnEajz9hXA7YrlnZY4Dl/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5?node-id=415%3A25). 
Делать дизайн точь в точь не обязательно! Важнее архитектура проекта и организация кода, чем внешний вид.

## Список желательного функционала

В рамках текущих задач предполагается взаимодействие с эмуляцией Rest Api сервера.

 #### 1) Получение списка уже созданных задач.
Подразумевается получение задач **get** запросом и вывод их согласно макету -  колонка наименования задачи, колонка статуса задачи, колонка с доступными для задачи действиями "редактировать" и "удалить" (на макете выражены иконками ) .

  #### 2) Удаление задачи.
Подразумевается удаление задачи **delete** запросом. 
Механизм удаления со стороны пользователя должен выглядеть следующим образом:

 1. Для существующей задачи из списка нажимается иконка удаления.
 2. Появляется модальное окно подтверждения действия. 
 3. Если пользователь нажал отмена - окно закрывается, ничего не происходит. 
 4. Если пользователь нажал ок - отправляется запрос на удаление задачи и после его выполнения задача удаляется из списка.

  #### 3) Редактирование задачи.
  
Подразумевается редактирование задачи **put** запросом. 
Механизм редактирования со стороны пользователя должен выглядеть следующим образом:

  1. Для существующей задачи из списка нажимается иконка редактирования.
  2. Инпут с текстом задачи в строке становится редактируемым.
  3. Иконки редактирования и удаления в строке заменяются на иконки подтверждения действий.
  4. При клике на иконку подтверждения отправляется запрос на редактирование задачи. После выполнения запроса иконки возвращаются к первоначальному виду (редактировать/удалить), инпут становится заблокированным для редактирования и содержит в себе новое значение.
  5. При клике на иконку отмены строка задачи должна вернуться к первоначальному виду.

Редактирование состояния задачи (выполнена/не выполнена) можно сделать как только при редактировании всей задачи в целом, так и отправлять запрос при каждой смене состояния - сделать на свое усмотрение.

  #### 4) Добавление новой задачи.
  
Подразумевается добавление задачи **post** запросом. 
Механизм редактирования со стороны пользователя должен выглядеть следующим образом:

 1. Вводится наименование задачи в поле *"Введите название задачи"*.
 2. Нажимается кнопка добавить задачу. 
 3. После нажатия отправляется запрос на добавление новой задачи. Статус устанавливается по умолчанию  (isCompleted - false). Реализацию задания идентификатора сделать по своему усмотрению. 
 4. После успешного выполнения запроса, задача должна отобразиться в общем списке всех задач.

  #### 5)  Фильтрация задач по наименованию.

Предполагается реализация фильтрации на стороне web приложения.
При вводе какого-либо значения в поле *"Поиск по задаче"* список задач должен сразу же фильтроваться по вхождению введенных символов.
  
 *Будет являться плюсом: 
 Сохранение введенного фильтра при перезагрузке страницы.

## Описание окружения

Для выполнения данной задачи было подготовлено окружение, которое содержит в себе: 

 1. Эмулятор API - сервера.  Для этих целей использовался [json-server](https://www.npmjs.com/package/json-server) (описание функционала можно посмотреть по ссылке).   Для запуска необходимо запустить команду `npm run json-server`. По умолчанию поднимается на `http://localhost:3000/`.
 2. Подключенные шрифты (подключение располагается по пути `src\styles\fonts.scss`, сами же шрифты по пути `src\assets\fonts\*`) . 
 3. Заданные переменные стилей (располагаются по пути `src\styles\variables.scss`). При необходимости добавить недостающие переменные.
 4. Загружены необходимые для работы иконки  (располагаются по пути `src\assets\svg\*`).  При необходимости дозагрузить недостающие.

Для запуска приложения необходимо запустить команду `npm i` для установки всех необходимых пакетов и `npm run start` для старта непосредственно самого приложения.

## Решение

Решение должно быть представлено публичным репозиторием или zip-архивом. Результат решения (ссылку на репозиторий или zip-архив) следует отправить на

a.bondartsov@intellectika.ru.

Удачи! <3