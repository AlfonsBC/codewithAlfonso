// quotes list
var quotes = [];
// loop over the range of pages to scrape
for (var page = 1; page<3; page++)
    // Make HTTP request to the target page URL
    fetch('https://quotes.toscrape.com/page/' + page.toString() + '/')
    // extract HTML from response object
        .then(response => response.text())

    // parse HTML
        .then(content => $(content).find('div[class="quote"]').each(function() {
            // current quote's data
            var quote = {
                'quote': $(this).find('span[class="text"]').text(),
                'author': $(this).find('small[class="author"]').text(),
                'tags':[]
            };
            // loop over tags
            $(this).find('a[class="tag"]').each(function() {
                // current tag data
                var tag = {
                    'name': $(this).text(),
                    'url': $(this).attr('href')
                }
            // append tag to quote
            quote.tags.push(tag);
            })
            // append quote to quotes list
            quotes.push(quote);
        }))

// download data as JSON
$('head').append('<a download="quotes.json"></a>');
$('a[download="quotes.json"]').attr('href', window.URL.createObjectURL(new Blob([JSON.stringify(quotes, null, 2)], {type:"text"} )))
$('a[download="quotes.json"]')[0].click()
