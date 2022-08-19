import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../Redux/Reducer/Counter";

// export default class Test extends Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0,
//         }
//         // this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick ()  {
//         // this.setState({
//         //     count: this.state.count + 1,
//         // })
//         this.setState(prevState => ({
//             count: prevState.count + 1,
//         }))
//         // alert('hello')

//     }
//     RedenerPrint ({data, onClick}) {
//         return (
//             <div
//             onClick={onClick}
//             className="cursor-pointer select-none"
//             >{data ? `you clicked me ${data} time` : 'Click me!'}</div>
//           )
//     }
//   render() {
//     return (
//         // this.redenerPrint()
//         <this.RedenerPrint data={this.state.count} onClick={this.handleClick.bind(this)} />
//     )
//   }
// }

export default function Test() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <p className="py-4 text-center">count : {count}</p>
      <div className="flex flex-row gap-2 items-center">
        <button
          onClick={() => {
            dispatch(increment());
          }}
          className="px-3 py-1 rounded-md bg-slate-400 text-white "
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
          className="px-3 py-1 rounded-md bg-slate-400 text-white "
        >
          Decrement
        </button>
        <button
        className="px-3 py-1 rounded-md bg-slate-400 text-white "
        onClick={() => {
            dispatch(incrementByAmount({
                amount: 10
            }))
        }}
        >
            Incremment by 10
        </button>
      </div>
    </div>
  );
}
