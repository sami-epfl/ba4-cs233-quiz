Question 1: Decide whether the following are valid kernels and explain why.
1. k(xi, xj ) = 4
2. k(xi, xj ) = −4
3. k(xi, xj ) = (xT_i xj)²

4. k(xi, xj ) = cos(xi − xj )
5. k(xi, xj ) = cos(xi) sin(xj )
Solution:
1. Yes. Let φ(x) = 2.
2. No. k(x, x) should not be negative.
3. Yes. It is a special case of polynomial kernel on page 22 of the slide.
4. Yes. Since cos(xi − xj ) = cos(xi) cos(xj ) + sin(xi) sin(xj ), let φ(x) = [cos(x),sin(x)].
5. No. k(x, x) should not be negative.


