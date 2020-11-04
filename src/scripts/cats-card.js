//------------------------------------------------------------------------------------------------------------
// Данные
//------------------------------------------------------------------------------------------------------------


    // Массив данных
    let cats_card = [{
        id: 'cat-item-num-1',
        status: 'default',
        updesc: 'Сказочное заморское яство',
        title: 'Нямушка',
        taste: 'с фуа-гра',
        desc: '<b>10</b> порций<br>мышь в подарок',
        weight: 0.5,
        outerdesc: {
            default: 'Чего сидишь? Порадуй котэ, <a href="javascript:void(0)">купи</a>.',
            selected: 'Печень утки разварная с артишоками.',
            disabled: 'Печалька, с фуа-гра закончился.'
        }
    }, {
        id: 'cat-item-num-2',
        status: 'default',
        updesc: 'Сказочное заморское яство',
        title: 'Нямушка',
        taste: 'с рыбой',
        desc: '<b>40</b> порций<br><b>2</b> мыши в подарок',
        weight: 0.5,
        outerdesc: {
            default: 'Чего сидишь? Порадуй котэ, <a href="javascript:void(0)">купи</a>.',
            selected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
            disabled: 'Печалька, с рыбой закончился.'
        }
    }, {
        id: 'cat-item-num-3',
        status: 'disabled',
        updesc: 'Сказочное заморское яство',
        title: 'Нямушка',
        taste: 'с курой',
        desc: '<b>100</b> порций<br><b>5</b> мышей в подарок<br>заказчик доволен',
        weight: 0.5,
        outerdesc: {
            default: 'Чего сидишь? Порадуй котэ, <a href="javascript:void(0)">купи</a>.',
            selected: 'Филе из цыплят с трюфелями в бульоне.',
            disabled: 'Печалька, с курой закончился.'
        }
    }];

    const container_elm = $('#cats-card-once-element')[0];
    const item_class = '.cats-card__item';


//------------------------------------------------------------------------------------------------------------
// Данные
//------------------------------------------------------------------------------------------------------------





//------------------------------------------------------------------------------------------------------------
// Функции
//------------------------------------------------------------------------------------------------------------


    // Отрисовка блоков
    export function render () {
        ReactDOM.render( <CatsCard />, container_elm );
    }


//------------------------------------------------------------------------------------------------------------
// Функции
//------------------------------------------------------------------------------------------------------------





//------------------------------------------------------------------------------------------------------------
// События
//------------------------------------------------------------------------------------------------------------


    // Загрузка окна
    $( window ).off( 'load.cats-card' );
    $( window ).on( 'load.cats-card', function ( event ) {
        render ();
    });


    // Клик по элементу
    $( document ).off( 'click.cats-card', item_class );
    $( document ).on( 'click.cats-card', item_class, function ( event ) {
        let num = parseInt( $( this ).attr( 'num' ));
        num = isNaN( num )? 0: num;
        const changed = {
            default: 'selected',
            selected: 'default'
        };

        if ( cats_card.hasOwnProperty( num )) {
            const status = cats_card[ num ].status;

            if ( changed.hasOwnProperty ( status )) {
                cats_card[ num ].status = changed[ status ];
                render ();
            }
        }
    });


//------------------------------------------------------------------------------------------------------------
// События
//------------------------------------------------------------------------------------------------------------





//------------------------------------------------------------------------------------------------------------
// Классы
//------------------------------------------------------------------------------------------------------------


    // Элемент списка
    class CatsCard extends React.Component {
        render () {
            return cats_card.map (( value, key ) =>
                <div className={ 'cats-card__item status_' + value.status } id={ value.id } num={ key }>
                    <div className="cats-card__item-wrapper">
                        <div className="cats-card__item-updesc">{ Parser ( value.updesc )}</div>
                        <div className="cats-card__item-title">{ Parser ( value.title )}</div>
                        <div className="cats-card__item-taste">{ Parser ( value.taste )}</div>
                        <div className="cats-card__item-desc">{ Parser ( value.desc )}</div>
                        <div className="cats-card__item-cat-image"></div>
                        <div className="cats-card__item-size">
                            <div className="cats-card__item-size-bold">{ Parser (( value.weight.toString()).replace( '.', ',' ))}</div>
                            <div className="cats-card__item-size-light">кг</div>
                        </div>
                    </div>
                    <div className="cats-card__item-outer-desc">{ Parser ( value.outerdesc[ value.status ])}</div>
                </div>
            );
        }
    }


//------------------------------------------------------------------------------------------------------------
// Классы
//------------------------------------------------------------------------------------------------------------