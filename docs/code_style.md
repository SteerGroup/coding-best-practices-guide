# Code Style

Good style makes your code more legible to others, making collaboration and
adaptation much easier. While syntactic conventions vary across languages and
even between groups of users of single languages, the most important element of
good code style is consistency.

Make sure that all of your code is formatted consistently, including indentation
and other whitespace, variable names, function declarations, for-loops,
if-statements, etc.

## Style Guides

Style guides are documents that lay out stylistic conventions for items such as
use of whitespace, variable naming, and comment formatting. They are essential
for ensuring stylistic consistency across the different coders on a project and
across different projects within a single organization.

The following style guides are recommended for use in Steer coding projects.

- Python: [PEP 8 Style Guide](https://www.python.org/dev/peps/pep-0008/)
- R: [Tidyverse Style Guide](https://style.tidyverse.org)
- JavaScript: [AirBnB Style Guide](http://github.com/airbnb/javascript)

## Linters

Linters are lightweight utilities used to check if code adheres to a specified
set of stylistic rules. Linters can often be incorporated directly into modern
text editors via extensions, and frequently provide suggested fixes to problems
(but don't blindly trust these).

The following linters are recommended for use in Steer coding projects.

- Python: [Flake8](https://flake8.pycqa.org/en/latest/)
- R: [lintr](https://github.com/r-lib/lintr)
- JavaScript: [ESLint](https://eslint.org) (can be configured to use the rules
  in the AirBnB Style Guide using the
  [eslint-config-airbnb package](https://www.npmjs.com/package/eslint-config-airbnb))

## Comments

Comments are an essential part of your code, but it's also important to avoid
overcommenting. If you've written clean code that follows good practices and the
agreed-upon style guide, what your code does should already be fairly clear.
Sparingly-used comments that describe what is happening in tricky parts of your
code and why certain things are done are much preferred to comments describing
what every line of code does.

:::: code-group
::: code-group-item Python

```python
# bad

i = 0          # set iterator to 0
while i < 3:   # loop until i reaches 3
    print(i)   # print value of i
    i = i + 1  # increment i



# good

# Loop from 0 to 3, print values.
i = 0
while i < 3:
    print(i)
    i = i + 1

```

:::
::: code-group-item R

```r
# bad

i <- 0           # set iterator to 0
while (i < 3) {  # loop until i reaches 3
    print(i)     # print value of i
    i <- i + 1   # increment i
}


# good

# Loop from 0 to 3, print values.
i <- 0
while (i < 3) {
    print(i)
    i <- i + 1
}
```

:::
::: code-group-item JavaScript

```js
// bad

let i = 0;          // set iterator to 0
while (i < 3) {     // loop until i reaches 3
  console.log(i);   // print value of i
  i += 1;           // increment i
}


// good

// Loop from 0 to 3, print values.
let i = 0;
while (i < 3) {
  console.log(i);
  i += 1;
}
```

:::
::::

## Naming

Whichever language you are using, make sure that your names make it clear what
your variables are and what your functions do. A good rule of thumb is to use
nouns for variable names and verbs (sometimes in combination with nouns) for
function names. Avoid using throwaway names or abbreviations that are not
meaningful. It is also generally not recommended to include an object's type in
its name.

Functions and variable names in Python and R use `snake_case`, while functions
and variables in JavaScript use `camelCase`. See the recommended style guides
for conventions on formats for the names of other objects.

See the code block below for various good and bad naming examples.

:::: code-group
::: code-group-item Python

```python
# bad

v = 1300

purp_string = 'work'

def my_function(x):
    return 5 * x

def area(x):
    return math.pi * x**2




# good

volume = 1300

trip_purpose = 'work'

def multiply_by_five(x):
    return 5 * x

def calculate_circle_area(radius):
    return math.pi * radius**2


```

:::
::: code-group-item R

```r
# bad

v <- 1300

purp_string <- "work"

my_function <- function(x) {
    return(5 * x)
}

area <- function(x) {
    return(pi * x^2)
}


# good

volume <- 1300

trip_purpose <- "work"

multiply_by_five <- function(x) {
    return(5 * x)
}

calculate_circle_area <- function(radius) {
    return(pi * radius^2)
}
```

:::
::: code-group-item JavaScript

```js
// bad

const v = 1300;

const purpString = "work";

function myFunction(x) {
  return 5 * x;
}

function area(x) {
  return Math.PI * x ** 2;
}


// good

const volume = 1300;

const tripPurpose = "work";

function multiplyByFive(x) {
  return 5 * x;
}

function calculateCircleArea(radius) {
  return Math.PI * radius ** 2;
}
```

:::
::::

Note that a short variable name like `x` is acceptable as the name of the only
argument to a simple function, and `i` is acceptable as an iterator.

## Readability vs. Performance

Readability and simplicity should be prioritized over performance with few
exceptions, since the small reduction in efficiency is rarely enough to matter.
At Steer, possible exceptions may include web design (where efficiency of
client-side code is very important) and processing of very large datasets.

:::: code-group
::: code-group-item Python

```python
# bad

share_auto = (math.exp(msc_auto + beta_tt * tt_auto)
    / (math.exp(msc_auto + beta_tt * tt_auto)
    + math.exp(beta_tt * tt_bus + beta_wt * wt_bus)))


# better

utility_auto = msc_auto + beta_tt * tt_auto
utility_bus = beta_tt * tt_bus + beta_wt * wt_bus

share_auto = math.exp(utility_auto) / (math.exp(utility_auto)
    + math.exp(utility_bus))
```

:::
::: code-group-item R

```r
# bad

share_auto <- (exp(msc_auto + beta_tt * tt_auto)
    / (exp(msc_auto + beta_tt * tt_auto)
    + exp(beta_tt * tt_bus + beta_wt * wt_bus)))


# better

utility_auto <- msc_auto + beta_tt * tt_auto
utility_bus <- beta_tt * tt_bus + beta_wt * wt_bus

share_auto <- exp(utility_auto) / (exp(utility_auto)
    + exp(utility_bus))
```

:::
::: code-group-item JavaScript

```js
// bad

const shareAuto =
  Math.exp(mscAuto + betaTT * ttAuto) /
  (Math.exp(mscAuto + betaTT * ttAuto) +
    Math.exp(betaTT * ttBus + betaWT * wtBus));

// better

const utilityAuto = mscAuto + betaTT * ttAuto;
const utilityBus = betaTT * ttBus + betaWT * wtBus;

const shareAuto =
  Math.exp(utilityAuto) / (Math.exp(utilityAuto) + Math.exp(utilityBus));
```

:::
::::

Note that in this example, any efficiency gains associated with the "bad"
example are wiped out if the intermediate utility values are needed for another
calculation, since they will need to be recomputed.

## Other Best Practices

- Avoid deep nesting, which can make code very difficult to read.
- Limit line length, typically to 80 characters or less. This generally
  eliminates the need for horizontal scrolling and line wrapping when editing.
