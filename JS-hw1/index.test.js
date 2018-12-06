'use strict';

test('test_string', () => {
    expect("Lesia".length).toEqual(5);

    expect("Mittens for kittens".indexOf("kittens")).toEqual(12);
    expect("Mittens for kittens".indexOf("dogs")).toEqual(-1);
    expect("Mittens for kittens".indexOf("for",5)).toEqual(8);
    expect("Mittens for kittens for".lastIndexOf("for")).toEqual(20);
    expect("Mittens for kittens".lastIndexOf("cat")).toEqual(-1);
    expect("Mittens for kittens".search("for")).toEqual(8);

    expect("Mittens for kittens".slice(0,7)).toEqual("Mittens");
    expect("Mittens for kittens".slice(-7,-4)).toEqual("kit");
    expect("Mittens for kittens".slice(-7)).toEqual("kittens");
    expect("Mittens for kittens".slice(8)).toEqual("for kittens");

    expect("Mittens for kittens".substring(0,7)).toEqual("Mittens");
    expect("Mittens for kittens".substr(8,3)).toEqual("for");
    expect("Mittens for kittens".substr(8)).toEqual("for kittens");
    expect("Mittens for kittens".substr(-7)).toEqual("kittens");

    expect("Mittens for kittens".replace("kittens","dogs")).toEqual("Mittens for dogs");
    expect("Mittens for kittens and kittens".replace("kittens","dogs")).toEqual("Mittens for dogs and kittens");
    expect("Mittens for kittens".replace("KITTENS","dogs")).toEqual("Mittens for kittens");
    expect("Mittens for kittens".replace(/KITTENS/i,"dogs")).toEqual("Mittens for dogs");
    expect("Mittens for kittens and kittens".replace(/kittens/g,"dogs")).toEqual("Mittens for dogs and dogs");

    expect("mittens for kittens".toUpperCase()).toEqual("MITTENS FOR KITTENS");
    expect("MITTENS FOR KITTENS".toLowerCase()).toEqual("mittens for kittens");
    expect("Mittens".concat(" ","for"," ","kittens")).toEqual("Mittens for kittens");
    expect(("Mittens"+" "+"for"+" "+"kittens")).toEqual("Mittens for kittens");

    expect("   Mittens for kittens   ".trim()).toEqual("Mittens for kittens");
    expect("Mittens for kittens".charAt(1)).toEqual("i");
    expect("Mittens for kittens".charCodeAt(1)).toEqual(105);
    expect("Mittens for kittens"[6]).toEqual("s");

    expect("Mittens for kittens".split(" ")).toEqual(["Mittens", "for", "kittens"]);
    expect("Mittens".split("")).toEqual(["M", "i", "t", "t", "e", "n", "s"]);
});

test('test_numbers', () => {
    expect((100 + 23).toString()).toEqual("123");
    expect((597.123).toExponential(3)).toEqual("5.971e+2");
    expect((597.123).toFixed(0)).toEqual("597");
    expect((597.123).toFixed(2)).toEqual("597.12");
    expect((597.123).toPrecision(4)).toEqual("597.1");

    expect((215).valueOf()).toEqual(215);
    expect((5 + 2).valueOf()).toEqual(7);

    expect((Number(true))).toEqual(1);
    expect((Number(false))).toEqual(0);
    expect((Number("10"))).toEqual(10);

    expect(Number(new Date("2018-12-03"))).toEqual(1543795200000);
    expect(parseInt("10.33")).toEqual(10);
    expect(parseInt("10 20 30")).toEqual(10);
    expect(parseInt("300 pigs")).toEqual(300);
    expect(parseInt("pigs 300")).toEqual(NaN);

    expect(parseFloat("10.33")).toEqual(10.33);
    expect(parseFloat("10 20 30")).toEqual(10);
    expect(parseFloat("pigs 50")).toEqual(NaN);

    expect(Number.MAX_VALUE).toEqual(1.7976931348623157e+308);
    expect(Number.MIN_VALUE).toEqual(5e-324);

    expect(Number.POSITIVE_INFINITY).toEqual(Infinity);
    expect(1/0).toEqual(Infinity);
    expect(Number.NEGATIVE_INFINITY).toEqual(-Infinity);
    expect(-1/0).toEqual(-Infinity);

    expect(Number.NaN).toEqual(NaN);
    expect(100 / 'pigs').toEqual(NaN);
});

test('test_arrays', () => {
    expect(new Array()).toEqual([]);
    let arr = ["work", "drink", "ping"];

    expect(arr.toString()).toEqual("work,drink,ping");
    expect(arr.join("*")).toEqual("work*drink*ping");

    expect(["work", "drink", "ping"].pop()).toEqual("ping");
    expect(arr.push("king")).toEqual(4);

    expect(arr.shift()).toEqual("work", "ping");
    expect(arr.unshift("king")).toEqual(4);

    arr[0]="link";
    expect(arr).toEqual(["link", "drink", "ping", "king"]);

    arr[arr.length]="ping";
    expect(arr).toEqual(["link", "drink", "ping", "king", "ping"]);

    arr.splice(1, 0, "hello");
    expect(arr).toEqual(["link", "hello", "drink", "ping", "king", "ping"]);

    expect(arr.concat("bye")).toEqual(["link", "hello", "drink", "ping", "king", "ping", "bye"]);

    expect(arr.slice(1)).toEqual(["hello", "drink", "ping", "king", "ping"]);
    expect(arr.slice(1,3)).toEqual(["hello", "drink"]);

    expect(["link", "drink", "ping", "king"].sort()).toEqual(["drink", "king", "link", "ping"]);
    expect(["link", "drink", "ping", "king"].reverse()).toEqual(["king", "ping", "drink", "link"]);

    expect([50, 91, 3, 7, 25, 15].sort(function(a, b){return a - b})).toEqual([3, 7, 15, 25, 50, 91]);
    expect([50, 91, 3, 7, 25, 15].sort(function(a, b){return b - a})).toEqual([91, 50, 25, 15, 7, 3]);
});
test('test_compare_operators', () => {

    let x = 7;

    expect(x == 8).toEqual(false);
    expect(x == 7).toEqual(true);
    expect(x == "7").toEqual(true);
    expect(x === 7).toEqual(true);
    expect(x === "7").toEqual(false);
    expect(x != 8).toEqual(true);
    expect(x !== 7).toEqual(false);
    expect(x !== "7").toEqual(true);
    expect(x !== 8).toEqual(true);
    expect(x > 9).toEqual(false);
    expect(x < 9).toEqual(true);
    expect(x >= 9).toEqual(false);
    expect(x <= 8).toEqual(true);
    expect(2 < "12").toEqual(true);
    expect("7" < "12").toEqual(false);
    expect("7" > "12").toEqual(true);
});
test('test_equality_comparison_algorithm', () => {
    expect('7' > 0).toEqual(true);
    expect(!!'false' == true).toEqual(true);
    expect('false' == false).toEqual(false);
    expect(['x'] == 'x').toEqual(true);
    expect('x' + 25).toEqual('x25');
    expect('10' / 2).toEqual(5);
    expect(7 + 5 + 'x').toEqual('12x');
    expect('x' + 15 + 7).toEqual('x157');
});
