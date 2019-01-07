$(document).ready(() => {
    const players = {
        obi: {
            health: 120,
            attack: 12,
            counterAttack: 16,
            multiplier: 3
        },
        luke: {
            health: 140,
            attack: 8,
            counterAttack: 12,
            multiplier: 4
        },
        sidious: {
            health: 150,
            attack: 17,
            counterAttack: 10,
            multiplier: 2
        },
        maul: {
            health: 180,
            attack: 19,
            counterAttack: 9,
            multiplier: 3
        },

    };

    //make all links clickable with hook on wrapper container
    $('.btn').hide();
    $('.fighter').on('click', function() {
        const newEl = $('<div></div>').addClass('your-enemies d-flex')
        $(this).removeClass("fighter trick").addClass('selected').off('click');
        $(newEl).appendTo('main')
        $('.fighter').appendTo('.your-enemies').off('click');
        $('.fighter').removeClass('fighter').addClass('enemies').on('click', function() {
            const newestEl = $('<div></div>').addClass('waiting d-flex')
            $(this).removeClass('enemies').addClass('opponent').off('click');
            $(newestEl).appendTo('main');
            $('.enemies').appendTo('.waiting');
            // $('<div>Attack</div>').addClass('btn btn-danger').appendTo('.clicker');
            $('.btn').show();
        });
        $('.btn').on('click', function () {
            console.log($('.opponent'));
            
        });
    });

    // $('.enemies').on('click', );

    






});