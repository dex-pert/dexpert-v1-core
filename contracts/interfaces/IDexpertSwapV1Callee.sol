pragma solidity >=0.5.0;

interface IDexpertSwapV1Callee {
    function dexpertSwapV1Call(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
