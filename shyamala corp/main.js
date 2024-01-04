document.addEventListener("DOMContentLoaded", () => {
    var myIndex = 0;
    carousel();
    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) { myIndex = 1 }
        x[myIndex - 1].style.display = "block";
        setTimeout(carousel, 2000); // Change image every 2 seconds
    }
    // Get all navigation links
    // const navLinks = document.querySelectorAll('.anc');
    // // Function to handle click event
    // function handleClick(event) {
    //     console.log(navLinks);
    //     console.log(event.target);
    //     // Remove 'active' class from all links
    //     navLinks.forEach(link => {
    //         console.log('test');
    //         link.classList.remove('active');
    //     });
    
    //     // Add 'active' class to the clicked link
    //     console.log('set active');
    //     event.target.classList.add('active');
    // }
    
    // // Add click event listener to each navigation link
    // navLinks.forEach(link => {
    //     link.addEventListener('click', handleClick);
    // });
        

});
