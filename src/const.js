var number = ['1', '2', '3', '4', '5', '6'].map( (item, i) => {
    return (
        <tr key={i}>
            <td>{item}</td>
        </tr>
    );
});
var name = ['Старыгин Константин Александрович', 'Цепелева Татьяна Александровна',
    'Кузин Никита Олегович', 'Ведушев Алексей Анатольевич',
    'Тимакова Елена Сергеевна', 'Егошин Роман Николаевич'].map( (item, i) => {
    return (
        <tr key={i}>
            <td>{item}</td>
        </tr>
    );
});
var sum = ['1 234', '1 235', '1 236',
    '1 237', '1 238', '1 239'].map( (item, i) => {
    return (
        <tr key={i}>
            <td>{item}</td>
        </tr>
    );
});

var inf = ['?', '?', '?', '?', '?', '?'].map( (item, i) => {
    return (
        <tr key={i}>
            <button onClick={this.edit} className="button">{item}</button>
        </tr>
    );
});
var edit = ['редактировать', 'редактировать', 'редактировать',
    'редактировать', 'редактировать', 'редактировать'].map( (item, i) => {
    return (
        <tr key={i}>
            <button onClick={this.edit} className="button">{item}</button>
        </tr>
    );
});
var remove = ['удалить', 'удалить', 'удалить',
    'удалить', 'удалить', 'удалить'].map( (item, i) => {
    return (
        <tr key={i}>
            <button onClick={this.edit} className="button">{item}</button>
        </tr>
    );
});