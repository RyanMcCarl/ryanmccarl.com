---
author: rmccarl
categories:
- education
- language
- learning
- tech
- update
- personal
date: 2015-10-09T05:49:37Z
link: http://ryanmccarl.com/2015/10/09/developing-a-language-learning-program-high-frequency-sentence-identifier/
slug: developing-a-language-learning-program-high-frequency-sentence-identifier
tags:
- learning
- personal
- coding
- tech
title: Developing a language-learning program (high-frequency sentence identifier)
url: /2015/10/09/developing-a-language-learning-program-high-frequency-sentence-identifier/
---

UPDATE: I devoted most of my nights and weekends this year to building the program described below with the help of Kostyantyn Grinchenko, an excellent Ukrainian freelance developer. Then, after realizing that we had stumbled upon a breakthrough idea that could revolutionize language learning and help many people become fluent readers of their target language, I assembled a remote team of freelance and volunteer developers, designers, native-speaker audio recorders, and translators to help me develop it into a webapp (and future mobile app): [WordBrewery.com](https://wordbrewery.com). Please help WordBrewery grow by [trying it out](https://wordbrewery.com), joining our [email list](http://wordbrewery.us12.list-manage.com/subscribe?u=de5def825a669f96078a614d4&id=ccf98da72c), [subscribing](http://feeds.feedburner.com/LanguageUntapped) to our [blog](https://wordbrewery.com/blog/), following us on [Facebook](https://www.facebook.com/WordBrewery/) and [Twitter](https://twitter.com/WordBrewery), or taking a [beta tester survey](https://docs.google.com/forms/d/1VLYcHdI5-FLlr5hMRJ1DzhLKDUzfkPvyI8Bx3bvvk3w/viewform). Please [get in touch](mailto:admin@wordbrewery.com) if you are interested in supporting the WordBrewery project as a donor, investor, advocate, or volunteer. Thank you for your support.

---
Over the past two months, I've been experimenting with outsourcing small personal digital projects to overseas freelancers on Upwork. The experience has been very positive so far. I've decided to devote a post to each of the tasks I outsource to give readers a sense of how freelancers and virtual assistants can both make one's life easier in various ways and enable one to pursue projects and ideas despite lacking the time, expertise, or patience to implement them without outside help and delegation. I find Upwork and similar programs to be fascinating--a fantastic, unambiguously positive example of open markets and the division of labor.

I am very interested in finding efficient ways to learn things, especially languages. Language vocabulary is an example of the "[Pareto Principle](https://en.wikipedia.org/wiki/Pareto_principle)" (also known as the "80-20 rule"), according to which, "for many events, roughly 80% of the effects come from 20% of the causes." In the context of language learning, the rule fits the fact that the most common 1,000 words or so in a language account for about 90% of spoken speech in that language. Thus, the best way to quickly develop one's practical vocabulary in a second language is to focus on a [core vocabulary list](https://fluent-forever.com/the-method/vocabulary/#.VhdQRBNViko) of high-frequency words.

This insight, however, most be paired with another well-established principle of literacy and language learning: it is far better to learn vocabulary by studying it in context rather than in the form of isolated words in a list or on flash cards. Accordingly, language learners should study sentences, not words.

I thus came up with the idea for a language learning tool that identifies sentences with numerous high-frequency words: such sentences are especially valuable for language learners. But I could not find any program or tool that does this seemingly straightforward task. I know some basic computer programming, but for the near future I will lack the time and expertise to create such a tool from scratch myself. So I've decided to partially [outsource it](https://www.upwork.com/jobs/~0160ccc97b753712cc), and I've found several overseas programmers who appear to be very capable of creating the program as I envision it. Here is the job as posted on Upwork:

**_Language learning tool: High-frequency sentence identifier**

Purpose: allow language learners to identify and collect sentences that are particularly valuable to study and memorize because they use several high-frequency words and do not include any obscure words.

Suggested mode of operation:

-For each language, the program would draw upon data from at least two sources:

(1) a spreadsheet (CSV) or other easily manipulable data storage mechanism in which the 10,000 or 20,000 most column words of a language are pasted. In column one, assign the word a frequency score: the higher the frequency, the higher the score. So, for example, if the list has 500 words, the least common (most obscure) word in that list could be assigned a score of "1," and the most common word in the list could be assigned a score of 500.

(2) a list or corpus of example sentences, whether scraped in real-time from Wikipedia or other websites (e.g. Project Gutenberg, Tatoeba), or manually created and made available in a text file. For example, an Anki deck of example sentences (https://ankiweb.net/shared/info/1715094364) can be exported into a text file:

-El ministro ha informado a la nación sobre la guerra. (The prime minister has informed the nation about the war.)
-Él tragaba sus bebidas rápidamente. (He used to gulp his drinks too quickly.)

-The program would iterate over the target-language example sentences, scoring each sentence for its potential value to the language-learner. Sentences that use several high-frequency words would receive a higher score--and thus be more likely to be presented to the user. Sentences that include an uncommon or obscure word that does not appear on the frequency list at all (e.g., a word that is not among the 20,000 most common words of a language) would be penalized and less likely to be presented to the user.

-The program would have some mechanism for avoiding or reducing repetitiveness so that it brings in diverse sentences that do not repeat the same high-frequency words over and over. Ideally, this would be flexible so it does not completely disqualify a sentence just because one of its words was already used: this would disqualify too many sentences. But the program could somehow penalize sentences that use words that have already appeared in sentences the program has selected.

-The program would produce a CSV or text file of the sentences it has selected. The user should be able to instruct the program to return a certain number of sentences.

-To avoid repetitive results in repeat uses, the program should include an element of randomness in selecting sentences for presentation to the user. Ideally, the user should be able to set the randomness level. A randomness level of 0, for example, could remove all randomness and simply return the highest-scoring sentences, while a randomness level of 100 could return a completely random set of sentences.

Technical necessities:

-The program needs to be able to handle non-English characters and words such as French/Spanish/Portuguese accented characters as well as Japanese, Chinese, Korean, and Thai. For the Asian languages, the program will also need to be able to cope with sentences that do not separate words with spaces.

-The program must be able to handle sentence data formatted in varying ways from diverse sources. For example, it should use regular expressions or other tools to automatically identify the delimiters that signal where each sentence begins and ends. Whether the program is iterating over a text file exported from Anki or a messy webpage, the program should return only sentences--not single words, multiple sentences, translations, HTML tags, etc.

Further ideas:

-I would like the scoring mechanism to be flexible so I can experiment with different ways of scoring the sentences.

-It would be a bonus if the program could somehow be used to identify sentences that use a particular grammatical pattern or construction.

-It would further be helpful if the search mechanism accepted close matches to words on the frequency list to account for different verb conjugations, spelling variations, etc.

-I would like it if the program could, at the user's option, show its work by: (1) showing or hiding each sentence's frequency score in its results, and (2) returning not only sentences, but also--for each sentence--the high-frequency words the program found in that sentence, and those words' frequency score._

Please [email me](mailto:ryan.mccarl@gmail.com) if you have suggestions or would like to help out with creating the program.
