# Visualizing Attention Mechanisms

The Transformer architecture has revolutionized NLP. At its core lies the **Self-Attention** mechanism.

## The Equation

The core equation is:

$$
Attention(Q, K, V) = softmax(\frac{QK^T}{\sqrt{d_k}})V
$$

Where:
- $Q$ is the Query matrix
- $K$ is the Key matrix
- $V$ is the Value matrix

## Why Scale by $\sqrt{d_k}$?

We scale by $\sqrt{d_k}$ to prevent the dot products from growing too large in magnitude, which pushes the softmax function into regions where it has extremely small gradients.
