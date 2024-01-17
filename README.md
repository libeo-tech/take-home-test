# Why a Take-Home Test

Welcome to the LIBEO recruitment process! We are delighted to have you on board, and we look forward to spending meaningful and engaging time together during the upcoming technical interviews. Your participation is highly valued, and we are eager to get to know you better throughout this process. If you have any questions or concerns, feel free to reach out. 

As a starting point, we'd like you to complete this initial technical exercise. We firmly believe that our tech team should share a robust coding culture, and to evaluate this, we propose assessing your practices through a straightforward coding exercise. 

Some people have a working solution to this exercise in around 2 hours, some take longer. What matters is that you think you've shown what you want 😎.

This exercise typically leads to an interview. Unless the proficiency level falls short of our expectations, we will provide you with a detailed response outlining any aspects that we consider not acceptable for our team.

During the interview, we will ask you to share your screen, give feedback and discuss with you your code and the reasons for your choices.

Let's embark on this journey together! See you soon!

# Specifications

You are a new developer in a pharmacy management project, and your first job is to add a feature to an old existing piece of code so that we can begin managing new drugs. First an introduction to our system:

- All drugs have an `expiresIn` value which denotes the number of days we have until the item expires.
- All drugs have a `benefit` value which denotes how powerful the drug is.
- At the end of each day our system lowers both values for every drug.

But there is more:

- Once the expiration date has passed, Benefit degrades twice as fast.
- The Benefit of an item is never negative.
- "Herbal Tea" actually increases in Benefit the older it gets. Benefit increases twice as fast after the expiration date.
- The Benefit of an item is never more than 50.
- "Magic Pill" never expires nor decreases in Benefit.
- "Fervex", like Herbal Tea, increases in Benefit as its expiration date approaches. Benefit increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Benefit drops to 0 after the expiration date.

We plan on handling many more drugs, the first one is "Dafalgan", which you are tasked with adding to the system:

- Dafalgan degrades in Benefit twice as fast as normal drugs.

## Instructions

- [ ] Fork this repository
- [ ] Implement Dafalgan logic
- [ ] Publish it on GitHub as a pull-request
- [ ] Send us the link

You are encouraged to take the existing code and bring it to the highest level of quality you think is fit. We recommend that you write tests to help you during this process. What we want to see is your production grade code.

Do not break the public API of the `Drug` and `Pharmacy` classes, as those are used by other pieces of the software (you can add new methods though).

Please commit as frequently as possible to make the review easier.

To make sure that you will not break anything in the existing code, we added a simulation log in the _output.json_ file. Make sure that your code is able to generate the same file. You can generate a new file by running one of the following commands:

```sh
npm start
```
```sh
docker-compose up
```

Take note of the following npm scripts:
```sh
npm start #Runs the code without checking types and produces output.json
npm run typecheck #Checks typescript types
npm test #Runs specs
npm run lint #Checks the code against eslint and prettier rules
```
