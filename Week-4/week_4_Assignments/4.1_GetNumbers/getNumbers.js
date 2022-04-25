const polyfillPromiseState = {
    PENDING : "PENDING",
    RESOLVED : "RESOLVED",
    REJECTED : "REJECTED"
};

class polyfillPromise{
    constructor(fn){
        this.polyfillPromiseState = polyfillPromiseState.PENDING;
        this.resolver = this.resolver.bind(this);
        this.rejector = this.rejector.bind(this);
        this.thenFn = null;
        this.catchFn = null;
        fn(this.resolver, this.rejector);
    }
    resolver(resolveData){
        if(this.polyfillPromiseState === polyfillPromiseState.PENDING){
            this.thenFn && this.thenFn(resolveData);
        }
        this.polyfillPromiseState = polyfillPromiseState.RESOLVED;
    }
    rejector(rejectData){
        if(this.polyfillPromiseState === polyfillPromiseState.PENDING){
            this.catchFn && this.catchFn(rejectData);
        }
        this.polyfillPromiseState = polyfillPromiseState.REJECTED;
    }
}

const getNumber = ()=>
new polyfillPromise((res, rej)=>{
    const randomNumber = parseInt(Math.random()* 100, 10);
    setTimeout(()=>{
        if(randomNumber % 5 === 0){
            rej (console.log(`Rejected with number ${randomNumber}`))
        }
        else{
            res (console.log(`Resolved with number ${randomNumber}`))
        }
    },
   randomNumber*10 )
}
);
getNumber();
console.log(getNumber());
