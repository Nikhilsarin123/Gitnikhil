var rect =
{
    perimeter:(x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
};
function solverect(l,b)
{
        console.log("solving for the rectengle with l="+l+"and b="+b);
if(l<=0||b <=0)
{
    console.log("rectengle dimension should be graeter then zero: ")
}
else
{
    console.log("the area of the rectangle is" + rect.area(l,b));
    console.log("the primeter of the rectangle is"+ rect.perimeter(l,b));
}
}
solverect(2,4);
solverect(3,5);
solverect(0,5);
solverect(-3,5);
