ClassicEditor
    .create(document.querySelector('#editor'), {
        ckfinder: {
            uploadUrl: '/ckeditor5/image_upload/'
        }
    })
    .catch(error => {
        console.error(error);
    });