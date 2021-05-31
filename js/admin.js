$(document).ready(function () {
    $('#table').DataTable();
});
$(document).ready(function () {
    ClassicEditor
        .create(document.querySelector('.editor'), {

            toolbar: {
                items: [
                    'heading',
                    '|',
                    'bold',
                    'italic',
                    'link',
                    'strikethrough',
                    'underline',
                    'subscript',
                    'superscript',
                    'fontSize',
                    'fontFamily',
                    '|',
                    'bulletedList',
                    'numberedList',
                    'fontColor',
                    '|',
                    'htmlEmbed',
                    'blockQuote',
                    'insertTable',
                    'mediaEmbed',
                    'undo',
                    'redo',
                    'code'
                ]
            },
            language: 'id',
            table: {
                contentToolbar: [
                    'tableColumn',
                    'tableRow',
                    'mergeTableCells',
                    'tableCellProperties',
                    'tableProperties'
                ]
            },
            licenseKey: '',


        })
        .then(editor => {
            window.editor = editor;








        })
        .catch(error => {
            console.error('Oops, something went wrong!');
            console.error('Please, report the following error on https://github.com/ckeditor/ckeditor5/issues with the build id and the error stack trace:');
            console.warn('Build id: pksek945jlps-p3ilvsy9cnam');
            console.error(error);
        });
});
$(document).ready(function () {
    var ctx = document.getElementById('MyTransaction').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
            datasets: [{
                label: 'Penjualan',
                backgroundColor: 'rgba(166, 206, 227, 0.2)',
                borderColor: '#A6CEE3',
                data: [21, 20, 25, 22, 20, 34, 25, 21, 25, 22, 23, 31, 21]
            }]
        },

        // Configuration options go here

        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    fontColor: 'black',
                    defaultFontFamily: 'poppins'
                }
            },
            tooltips: {
                mode: 'nearest'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
});