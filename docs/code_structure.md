# Code Structure

In addition to styling your code consistently, being smart about the structure
of your code will make it easier to test, easier to read and update in the
future, and easier to adapt for other projects.

Best practices in this section generally apply to any programming language and
any type of coding. For this reason, some of the examples use pseudocode
(essentially text describing abstract code) instead of any particular language.

## DRY Code

One of the core principles of writing good code is "don't repeat yourself," and
code that follows this principle is said to be DRY. DRY code is not only more
efficient, but also much easier to update if something changes.

If you find yourself writing code that looks like the "bad" example below, you
should start thinking about loops and or functions to DRY it out. The "bad" code
in the example is almost three times as long as it needs to be, and any change
to one of the processing steps would need to be implemented in three places,
which introduces significant potential for error. By introducing a for-loop, we
have made the code easier to read, and now we only have to change processing
steps in a single location.

```
# bad

# load AM trips data
# processing step 1
# processing step 2
# processing step 3

# load PM trips data
# processing step 1
# processing step 2
# processing step 3

# load off-peak trips data
# processing step 1
# processing step 2
# processing step 3


# better

# loop through periods
  # load period data
  # processing step 1
  # processing step 2
  # processing step 3
```

## Abstraction

Where possible, abstract discrete actions into functions. This essentially lets
you create discrete custom building blocks to work with, which lets you group
your code into more manageable chunks and focus on how they fit together, rather
than how every line of code fits in.

The "better" code in the example below is taken from the previous example, where
we've made a great deal of improvement, but we can still do better. By
abstracting the processing of trip data into a function that we can call
whenever we need it (and testing it to make sure it works as expected), we can
free up the mental energy we were using to keep track of the processing code and
use it elsewhere, since we can trust that the `process_trip_data` function will
do its job. As an added bonus, the `process_trip_data` function is now available
to us if we need it elsewhere in our code. Finally, note that the final two
lines of pseudocode can now be very intuitively interpreted as "loop through the
time periods and process the trip data for each." This is a great example of
clear code that doesn't require clarifying comments.

```
# better (from previous example)

# loop through periods
  # load period data
  # processing step 1
  # processing step 2
  # processing step 3


# good

# process_trip_data function
  # processing step 1
  # processing step 2
  # processing step 3

# loop through periods
  # process_trip_data(period)
```

## Modularity

When possible, try to break your code up into distinct logical modules. Doing so
makes it easier to organize, collaborate, and adapt for other uses in the
future.

Along these lines, it is typically a good idea to separate the code that imports
and prepares your data from the code that implements your core logic. This way
you or someone else can much more easily adapt your program's logic to use with
input data from a different source.

## Portability

While you're coding, think about what you can do to make it easier for your code
to be used in another context. Importantly, don't hard code values! This makes
code much less portable.

A new user adapting the "bad" example below would have to change the working
directory in four separate places, while a user adapting the "good" example
would only have to change it once. And don't forget that there's a good chance
the "new user" will be the future you. Finally, note that the "good" example is
much DRYer than the "bad" one.

```
# bad

# read 'inputs1.csv' from 'Directory/'
# process inputs
# write 'outputs1.csv' to 'Directory/'

# read 'inputs2.csv' from 'Directory/'
# process inputs
# write 'outputs2.csv' to 'Directory/'

...   


# good

# set working_dir = 'Directory/'

# function process_file(i, directory):
    # read input i from directory
    # process inputs
    # write output i to directory

# loop through values of i
    # call process_file(i, working_dir)
```

Hard-coding is particularly dangerous with API keys, passwords, and other
sensitive information, but the use of environment variables provides an elegant
solution to this problem, without limiting portability. Assuming you've created
an environment variable called `EXAMPLE_API_KEY` (which can be done in a Bash
shell using `export EXAMPLE_API_KEY="abc123"`), the following example shows how
you can get its value from the operating system and assign it to a variable in
your code. This technique enables you to share your code without exposing your
API key, while also allowing someone else to use your code with their own API
key without having to modify the code.

:::: code-group
::: code-group-item Python
```python
import os

example_api_key = os.getenv('EXAMPLE_API_KEY')
```
:::
::: code-group-item R
```r
example_api_key <- Sys.getenv("EXAMPLE_API_KEY")


```
:::
::: code-group-item JavaScript
```js
const exampleApiKey = process.env.EXAMPLE_API_KEY

// Note that this is only relevant for server-side code.
```
:::
::::

## Pure Functions

Where possible, try to write pure functions, which rely exclusively on input
values and have no side effects. The use of pure functions generally improves
the portability of code, since if someone else uses one of your functions later,
there won't be confusion about what arguments need to be passed. It also makes
testing easier, since only the explicit arguments need to be considered.

In the "bad" example below, the `add_ab` function relies on a global variable,
`b`, whereas in the "good" example, `b`, like `a`, is an argument to the
`add_ab` function. Since the value of `b` can be changed by other parts of the
code, it is possible for `add_ab(a)` in the "bad" example to return different
values for the same value of `a`. By contrast, `add_ab(a, b)` in the "good"
example will always return the same value for a given values of `a` and `b`.

:::: code-group
::: code-group-item Python
```python
# bad

b = 3

def add_ab(a):
    return a + b



# good

def add_ab(a, b):
    return a + b

```
:::
::: code-group-item R
```r
# bad

b <- 3

add_ab <- function(a) {
    return(a + b)
}


# good

add_ab <- function(a, b) {
    return(a + b)
}
```
:::
::: code-group-item JavaScript
```js
// bad

const b = 3

function addAB(a) {
  return a + b
}


// good

function addAB(a, b) {
  return a + b
}
```
:::
::::

## Other Best Practices

* Minimize the use of global variables. Global variables can be difficult to
  manage, since their scope is not limited to a particular function or class.
* Try to design with scalability in mind to ensure your code will work with
  larger data sets and/or more users.
