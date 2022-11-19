# Node.js의 특징과 강/약점

## 비동기성
> *IO needs to be done differently.* - Ryan Dahl, JSConf 2009

* Event loop의 비동기: IO의 req-res 병목에 대한 해결책
* 기존의 동기 방식: 네트워크를 통한 req-res 방식은 res를 기다리는 동안 클럭이 낭비되는 문제

## Offloading
> 저수준의 오래 걸리는 일은 Node에게, 고수준의 연산은 메인 스레드가.

## 저수준 처리의 한계 극복
> C와 WASM 모듈을 바인딩

* C: *node-gyp*, WASM: Node@12

## Node Package Manager
