# Why a Take-Home Test

Welcome to the LIBEO recruitment process! We are delighted to have you on board, and we look forward to spending meaningful and engaging time together during the upcoming technical interviews. Your participation is highly valued, and we are eager to get to know you better throughout this process. If you have any questions or concerns, feel free to reach out. 

As a starting point, we'd like you to complete this initial technical exercise. We firmly believe that our tech team should share a robust coding culture, and to evaluate this, we propose assessing your practices through a straightforward coding exercise. 

This exercise typically leads to an interview. Unless the proficiency level falls short of our expectations, we will provide you with a detailed response outlining any aspects that we consider not acceptable for our team.

Last but not least, we strongly believe than something done is sometimes better than perfect. Thereforefore, don't spend too much time on it. It should take around 2-3h preparation maximum for any kind of level (rookie to senior).

Let's embark on this journey together! See you soon!

# Take-Home Test Specification

You are a new developer in the pharmacy team, and your first job is to add a feature to an old existing piece of code.
We recommend spending between 1 hour and 2 hours on the exercise. (Do more if you like 😇, do less if you think you've shown what you want😎)

## System specifications

Hi and welcome to the team. We are in the future, and we have extended our activities by opening a pharmacy. Your task is to add a new feature to our system so that we can begin distributing a new drug. First an introduction to our system:

- All drugs have an `expiresIn` value which denotes the number of days we have until the item expires.
- All drugs have a `benefit` value which denotes how powerful the drug is.
- At the end of each day our system lowers both values for every drug

But there is more:

- Once the expiration date has passed, Benefit degrades twice as fast.
- The Benefit of an item is never negative.
- "Herbal Tea" actually increases in Benefit the older it gets. Benefit increases twice as fast after the expiration date.
- The Benefit of an item is never more than 50.
- "Magic Pill" never expires nor decreases in Benefit.
- "Fervex", like Herbal Tea, increases in Benefit as its expiration date approaches. Benefit increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Benefit drops to 0 after the expiration date.

We have recently signed a supplier of "Dafalgan". This requires an update to our system:

- "Dafalgan" degrades in Benefit twice as fast as normal drugs.

## Instructions

- [ ] Fork this repository
- [ ] Implement the required feature
- [ ] Publish it on GitHub as a pull-request
- [ ] Send us the link and tell us approximatively how much time you spent on this assignment

You are encouraged to refactor the existing code before adding your own, as you would do if this was a real task in real life. We strongly recommend that you write tests to help you during this process.

Feel free to make any changes to the `updateBenefitValue` method implementation and add any new code as long as everything still works correctly. However, do not break the public API of the `Drug` and `Pharmacy` classes, as those are used by other pieces of the software (you can add new methods though).

Please commit as frequently as possible to make the review easier.

## Test

To make sure that you will not break anything in the existing code, we added a log of the simulation in the _output.txt_ file. Make sure that your code is able to generate the same file. You can generate a new file by running one of the following commands:

```sh
npm start
```
```sh
yarn start
```
```sh
docker-compose up
```
