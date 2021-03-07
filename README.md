# numpy-matrix-js

A numpy-like Matrix/Array module for Node JS. Browser support coming soon.



# Installation & Set Up

In your terminal, type this command to install the module.

```
npm install numpy-matrix-js
```

After that, add this following code to the top of your file to import it.

```
const np = require('numpy-matrix-js')
```

After this, you can now use the functions available in the module.



# Documentation

### Initializing


```np.zeros(rows, cols)```

Creates a new matrix/2d array filled with 0
If you only give 1 parameter, it creates a 1d array.

Parameters   |   What it is   | Required
-------------|----------------|----------
rows         |  number of rows in your array | yes
cols         |  number of columns in your array | no


```np.random.rand(rows, cols)```

Creates a new matrix/2d array of random values

Parameters   |   What it is   | Required
-------------|----------------|----------
rows         |  number of rows in your array | yes
cols         |  number of columns in your array | yes


### Built-in Math Functions

#### Sigmoid

```np.sigmoid(x)```

Returns the sigmoid value of whatever "x" value you input

#### Dsigmoid (Derivative of sigmoid)

```np.dsigmoid(x)```

Returns the dsigmoid value of whatever "x" value you input

### Tanh (Hyperbolic Tangent)

```np.tanh(x)```

Returns the hyperbolic tangent value of whatever "x" value you input

### Softmax

```np.softmax(inputs)```

Applies the softmax function to the inputs array and returns the new result as an array.
