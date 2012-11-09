#Building a Responsive Design is Tough to Test - Responsizer.JS Makes Measuring Easier

I choose to build my latest web site in a totally responsive manner to work on laptops,
iPads, iPhones in portrait and landscape. Many of you do it, but testing your media query
rules is a grind. What to do? Send it up to the server and load it on device? Are all the
devices at hand? Is the server ready? Is the server off-limits to changes?

Instead simply drop into your website the Responsizer.JS library letting it show you common
device widths as you resize your laptop browser. How does it work? This library is so easy
and useful you’ll wonder why you haven’t had something like this already.

Include the file “Responsizer.JS” into your index.html and it's assumed that jQuery is
loaded and available too.

The library is in fact a simple piece of Javascript code. It’s a self-invoking function
that hooks onto the window’s resize event. At the same time it creates a display box
centered along the top of the window. Watch it tell the window’s width and height as
the browser reports it.

As you resize your laptop browser (Chrome, Firefox, Safari, etc.) you’ll see the library
reporting the width and height. When a typical mobile width is reached (1024, 768, 480, 320)
it changes colors highlighting the significant breaking-point. This guidance helps you
conveniently test your responsive design on your development laptop without dragging a
cellphone or tablet into the mix.

##Copyright
There is no copyright. I'm putting Responsizer.JS into the public domain in the spirit of
sharing and learning. Use Responsizer.JS in whatever way you wish. If you make it better
log a pull request. If you get rich let's do business!

##For More Info
* Reach out to me on Twitter @KenTabor
* Read more at blog.katworksgames.com