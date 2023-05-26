import "./index.css";
import confetti from "canvas-confetti";
import { useState, useEffect } from "react";


function App() {
	const [tenzis, setTenzis] = useState(createNewGame());
	const [newGame,setNewGame] = useState(false);



	// створення об'екту масиву
	function createNewGame() {
		const tenzios = [];
		for (let i = 1; i <= 10; i++) {
			tenzios.push({
				num: Math.floor(Math.random() * 10),
				id: i,
				reserv: false,
			});
		}
		return tenzios;
	}
	// console.log(tenzios[e].reserv);
	// зміна reserv на true при кліку
	function reserveTenzion(id) {
		const updatedTenzios = tenzis.map((tenz) => {
			if (tenz.id === id) {
				return {
					...tenz,
					reserv: !tenz.reserv,
				};
			} else {
				return tenz;
			}
		});

		return updatedTenzios;
	}

	// змшна масиву при кліку на кнопку "Roll"
	const rollTenz = () => {
		return tenzis.map((tenz) => {
			if (tenz.reserv) {
				return tenz;
			} else {
				return {
					...tenz,
					num: Math.floor(Math.random() * 10),
				};
			}
		});
	};

	// перевірка на заповнення всіх елементів
	const allReserv = tenzis.every((tenz) => {
		return tenz.reserv;
	});
	// перевірка на співпадіння всіх номерів
	const allNumSame = tenzis.every((tenz) => {
		return tenz.num === tenzis[0].num;
	});

	useEffect(() => {
		if (allReserv && allNumSame) {
			confetti({
				particleCount: 550,
				startVelocity: -300,
				spread: 100,
				origin: {
					x: Math.random(),
					//
					y: Math.random() - 3.5,
				},
			});
		}
	});

	const newGameHandler = () => {
		if (allReserv && allNumSame) {
			setTenzis(createNewGame());
			setNewGame(true);
		}else {}
		setNewGame(!newGame)};
	
	const valueName =()=>{
		if(allReserv && allNumSame){
			return "New Game"
		}else{
			return "Roll"
		}
	}
	return (
		<div className="App" >
		
			<div className="conteiner"  >
				<div className="conteiner-text">
					<h1 className="title">Tenzies</h1>
					<p className="text">
						Roll until all dice the same.Clic each dice to freeze it at its
						current value between rolls.
					</p>
				</div>
				<div className="conteiner-tenz">
					{tenzis.map((tenz) => {
						return (
							<p
								className={tenz.reserv ? "tenz1" : "tenz"}
								key={tenz.id}
								onClick={() => {
									return setTenzis(reserveTenzion(tenz.id)),useEffect;
								}}>
								{tenz.num}
							</p>
						);
					})}
				</div>
				{/*  */}
				<div className="conteiner-button">
					<button className="button"  onClick={() =>{
						return setTenzis(rollTenz()),setNewGame(newGameHandler())
						}}>
						{valueName()}
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;

	
		
	

	
	