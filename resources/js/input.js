$(document).ready(function () {

    var selector = 'input[data-provides="anomaly.field_type.slug"]';

    // Slugify slug inputs.
    $(selector).slugify({
        slug: selector
    });

    // Watch for changes if applicable.
    $(selector).each(function () {

        var slug = $(this);
        var form = $(this).closest('form');
        var slugify = form.find('[data-field="' + slug.data('slugify') + '"]:visible').first();

        if (!slug.is(':disabled') && slugify.length) {

            // Slugify on keyup
            slugify.on('keyup', function () {
                slug.val(slugify.val().replace(/([^a-zA-Z0-9]+$)/g, '')).trigger('keyup');
            });

            // And slugify on blur
            slugify.on('blur', function () {
                slug.val(slugify.val().replace(/([^a-zA-Z0-9]+$)/g, '')).trigger('keyup');
            });
        }
    });
});
