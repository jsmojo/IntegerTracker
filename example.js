

class IntegerTracker {

    constructor() { 
        this.collection = [];
        this.obj = {};
        this.largest = 0;
        this.frequent = 0;
        this.total = 0;
        this.mean = 0;
        this.max = Math.max();
        this.min = Math.min();
    }

    track(int) {
        this.obj[int] = this.obj[int]? this.obj[int] += 1: 1;
        if(this.obj[int] >= this.frequent ) {
            this.frequent = this.obj[int];
            this.largest = int;
        }
        this.total += int;
        this.collection.push(int);
        this.mean = this.total / this.collection.length;
        if (int > this.max) 
            this.max = int;
        if (int < this.min) 
            this.min = int;
    }

    get_max() {
        return this.max;
    }

    get_min() {
        return this.min;
    }

    get_mean() {
        return this.mean;
    }

    get_mode() {
        return this.largest;
    }

}


let tracker = new IntegerTracker();
tracker.track(1);
tracker.track(0);
tracker.track(3);
tracker.track(1);

tracker
let max = tracker.get_max()
max
let min = tracker.get_min();
min
let mean = tracker.get_mean();
mean
let largest = tracker.get_mode();
largest

