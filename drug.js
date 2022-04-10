export class Drug {
  
    constructor(name, expiresIn, benefit) {
      this.name = name;
      this.expiresIn = expiresIn;
      this.benefit = benefit;
    }
    incrementBenefit(cout=1)
    {
        this.benefit+=cout;
    }
    decrementBenefit(cout=1)
    {
        this.benefit-=cout;
    }
    decrementexpiresIn()
    {
        this.expiresIn--;
    }
    updateDrug()
    {
        switch(this.name)
        {
               case "Herbal Tea":
                 if(this.expiresIn <= 0) this.incrementBenefit(2)
                 else this.incrementBenefit()
                 this.decrementexpiresIn();
                 break;
               
               case "Fervex":
                if(this.expiresIn <= 0) this.decrementBenefit(this.benefit)
                else {
                    this.incrementBenefit()
                    if(this.expiresIn < 6) this.incrementBenefit(2)
                    else if (this.expiresIn < 11) this.incrementBenefit(1)
                    
                }
                this.decrementexpiresIn();
                break;
               
               case "Magic Pill":
                   break;
               
               case "Dafalgon":
                this.decrementBenefit(2);
                this.decrementexpiresIn();
                break;
               
               default: 
                  if(this.expiresIn<=0) this.decrementBenefit(2);
                  else this.decrementBenefit();
                  this.decrementexpiresIn();
                  break;
        }
        return this;
    }
  }