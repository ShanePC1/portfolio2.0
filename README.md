Issues to address logo does not appear on sub routes? sub domains /grid/++ anything here
	Some images are showoing a scroll bar under them. Everything should be full size if the image cuts off text the image should shrink giving room for the text.
I dont really liek the current next buttons they should really just be the whole right or left of screen
I'd like to do two things one move the photo arrays out of the routes file. Two I'd like each routes photo array to populate off of the main array based on the description using includes or simmilar

Once those are fixed created a partial for purchase print whihc will apply to every image
Will need to create all the check out logic
Once that is done create a merch store. 
 
11/20 All but homepage will not have logo will use "mobileHeader"  instead for now.
Removed the x for close from all photos as all images can be clicked close
Removed - .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
removed background color from modal content and instead added it to #modalDescription 
	the idea is even though it looks a litte odd rn all images will have the purchase logic here so the black box wont always be jsut floating like it is on most images rn 


router.get('/grid/japan', (req, res) => {
    res.render('japan', { photoList:japanPhotos });
       <%- include('./partials/photoGrid'); %>



Stopped here
Add to cart and select size buttons were work as I wanted so I have what is currently there but that closes the modal(maybe thats fine?)
On mobile sometimes the sizing is fine and sometimes its tiny, not sure why. need to work out how to click through photos some it doesnt work on mobile 