# ASSESSMENT 6: Interview Practice Questions
Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: animal_id as part of the sightings model

  Researched answer: The Rails default behaviour is that the column used to hold the foreign key on a model is the name of the association with the suffix id added. The :foreign_key option lets you set the name of the foreign key directly. (stack overflow)

Sunday review: alright I need to work on communication

2. Which routes must always be passed params and why?

  Your answer: In the controller, .find and .destroy in order to select which instance is being found and deleted respectively.

  Researched answer: The RubyonRails.guide says much of the same, but I've forgotten: show (individual), update, and post to a child model (last one is iffy)



3. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess".

  Your answer:

  Main => Has_many Games
  Games => belongs_to Main
  validates :guess, presence:true

Sunday morning review: this is not correct and I don't know what would be...

4. Name three rails generator commands. What is created by each?

  Your answer: .new    = json data that is unsaved
               .create = json data that is saved
               .update = updated json data that is saved

  Researched answer:

  rails g model
  rails g migration
  rails g controller

oooof

5. Consider the Rails routes below. Describe the responsibility of each route.

/users        method="GET"  Show all of the json entries associated with Users

/users/1      method="GET"  Show a particular json entries associated with Users

/users/new    method="GET" ... doesn't display anything?

/users/       method="POST" Create a json entry using the model Users

/users/1      method="PUT" Update a particular json entry

/users/1      method="DELETE" Destroy a specific json entry
