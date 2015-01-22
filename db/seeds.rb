# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)




# Variables

users = [
	{ email: 'doge@gmail.com', password: 'dogeismaster' },
	{ email: 'ewpeters@asu.edu', password: 'dogeismaster' },
	{ email: 'corgi@gmail.com', password: 'corgicorgi' },
	{ email: 'advicedog@gmail.com', password: 'advicedogadvicedog' },
	{ email: 'keyboardcat@gmail.com', password: 'keyboardcatkeyboardcat' },
	{ email: 'couragewolf@gmail.com', password: 'couragewolfcouragewolf' },
	{ email: 'dwight@dundermifflin.com', password: 'dwightdwight' },
	{ email: 'scarf@dundermifflin.com', password: 'scarfscarf' },
	{ email: 'heisenberg@gmail.com', password: 'heisenbergheisenberg' },
	{ email: 'captaincook@gmail.com', password: 'captaincookcaptaincook' }
]

profiles = [
	{ first_name: 'Shiba', last_name: 'Inu', bio: 'i am doge. so doge.' },
	{ first_name: 'Erik', last_name: 'Peterson', bio: 'Web developer and ASU sun devil. I love computers and guitars.' },
	{ first_name: 'Some', last_name: 'corgi', bio: 'Never enough corgi!'},
	{ first_name: 'Advice', last_name: 'dog', bio: 'I give terrible advice to people on the internet.' },
	{ first_name: 'Keyboard', last_name: 'cat', bio: 'I "play people off".' },
	{ first_name: 'Courage', last_name: 'wolf', bio: 'Climb a mountain.  Punch the face of God.' },
	{ first_name: 'Dwight', last_name: 'Schrute', bio: 'Hard working. Alpha male. Jackhammer. Merciless. Insatiable.' },
	{ first_name: 'Michael', last_name: 'Scott', bio: 'much noob, bio so default' },
	{ first_name: 'Walter', last_name: 'White', bio: 'I am the one who knocks.' },
	{ first_name: 'Jesse', last_name: 'Pinkman', bio: 'none of your business' }
]

friendships = [
	# Doge
	{ in_friend_id: 1, out_friend_id: 2 },
	{ in_friend_id: 1, out_friend_id: 3 },
	{ in_friend_id: 1, out_friend_id: 4 },
	{ in_friend_id: 1, out_friend_id: 5 },
	{ in_friend_id: 1, out_friend_id: 6 },
	# Me
	{ in_friend_id: 2, out_friend_id: 1 },
	{ in_friend_id: 2, out_friend_id: 7 },
	{ in_friend_id: 2, out_friend_id: 8 },
	{ in_friend_id: 2, out_friend_id: 9 },
	{ in_friend_id: 2, out_friend_id: 10 },
	# Some corgi
	{ in_friend_id: 3, out_friend_id: 4 },
	{ in_friend_id: 3, out_friend_id: 6 },
	# Advice dog
	{ in_friend_id: 4, out_friend_id: 1 },
	{ in_friend_id: 4, out_friend_id: 3 },
	{ in_friend_id: 4, out_friend_id: 5 },
	{ in_friend_id: 4, out_friend_id: 6 },
	# Keyboard cat
	{ in_friend_id: 5, out_friend_id: 1 },
	{ in_friend_id: 5, out_friend_id: 4 },
	{ in_friend_id: 5, out_friend_id: 6 },
	{ in_friend_id: 5, out_friend_id: 8 },
	# Courage wolf
	{ in_friend_id: 6, out_friend_id: 3 },
	{ in_friend_id: 6, out_friend_id: 4 },
	{ in_friend_id: 6, out_friend_id: 5 },
	{ in_friend_id: 6, out_friend_id: 7 },
	# Dwight
	{ in_friend_id: 7, out_friend_id: 2 },
	{ in_friend_id: 7, out_friend_id: 6 },
	{ in_friend_id: 7, out_friend_id: 8 },
	# Michael
	{ in_friend_id: 8, out_friend_id: 2 },
	{ in_friend_id: 8, out_friend_id: 5 },
	{ in_friend_id: 8, out_friend_id: 7 },
	# Walt
	{ in_friend_id: 9, out_friend_id: 2 },
	{ in_friend_id: 9, out_friend_id: 10 },
	# Jesse
	{ in_friend_id: 10, out_friend_id: 2 },
	{ in_friend_id: 10, out_friend_id: 9 }
]

# Post times
pt01 = Time.utc(2015, 1, 3, 19, 56, 45).in_time_zone
pt02 = Time.utc(2015, 1, 3, 19, 57, 45).in_time_zone
pt03 = Time.utc(2015, 1, 3, 20, 1, 45).in_time_zone
pt04 = Time.utc(2015, 1, 10, 17, 13, 45).in_time_zone
pt05 = Time.utc(2015, 1, 11, 20, 11, 45).in_time_zone
pt06 = Time.utc(2015, 1, 10, 5, 32, 45).in_time_zone
pt07 = Time.utc(2015, 1, 2, 16, 30, 45).in_time_zone
pt08 = Time.utc(2015, 1, 10, 4, 8, 45).in_time_zone
pt09 = Time.utc(2015, 1, 10, 4, 12, 45).in_time_zone
pt10 = Time.utc(2015, 1, 14, 9, 37, 45).in_time_zone
pt11 = Time.utc(2015, 1, 6, 5, 24, 45).in_time_zone
pt12 = Time.utc(2015, 1, 8, 16, 30, 45).in_time_zone
pt13 = Time.utc(2015, 1, 8, 19, 53, 45).in_time_zone
pt14 = Time.utc(2015, 1, 8, 18, 34, 45).in_time_zone
pt15 = Time.utc(2015, 1, 10, 22, 58, 45).in_time_zone
pt16 = Time.utc(2015, 1, 6, 18, 49, 45).in_time_zone
pt17 = Time.utc(2015, 1, 10, 5, 18, 45).in_time_zone
pt18 = Time.utc(2015, 1, 11, 17, 17, 45).in_time_zone

# Comment times
ct01 = Time.utc(2015, 1, 11, 22, 19, 45).in_time_zone
ct02 = Time.utc(2015, 1, 11, 22, 21, 45).in_time_zone
ct03 = Time.utc(2015, 1, 3, 20, 20, 45).in_time_zone
ct04 = Time.utc(2015, 1, 8, 19, 54, 45).in_time_zone
ct05 = Time.utc(2015, 1, 8, 19, 54, 46).in_time_zone
ct06 = Time.utc(2015, 1, 8, 19, 56, 45).in_time_zone
ct07 = Time.utc(2015, 1, 8, 19, 57, 45).in_time_zone
ct08 = Time.utc(2015, 1, 8, 19, 57, 46).in_time_zone
ct09 = Time.utc(2015, 1, 10, 2, 50, 45).in_time_zone
ct10 = Time.utc(2015, 1, 3, 18, 15, 45).in_time_zone
ct11 = Time.utc(2015, 1, 3, 18, 26, 45).in_time_zone
ct12 = Time.utc(2015, 1, 8, 18, 48, 45).in_time_zone
ct13 = Time.utc(2015, 1, 8, 18, 50, 45).in_time_zone
ct14 = Time.utc(2015, 1, 14, 9, 11, 45).in_time_zone
ct15 = Time.utc(2015, 1, 14, 10, 59, 45).in_time_zone
ct16 = Time.utc(2015, 1, 10, 23, 14, 45).in_time_zone
ct17 = Time.utc(2015, 1, 7, 2, 40, 45).in_time_zone
ct18 = Time.utc(2015, 1, 10, 16, 28, 46).in_time_zone
ct19 = Time.utc(2015, 1, 11, 22, 19, 45).in_time_zone
ct20 = Time.utc(2015, 1, 11, 21, 1, 45).in_time_zone
ct21 = Time.utc(2015, 1, 11, 23, 50, 45).in_time_zone
ct22 = Time.utc(2015, 1, 10, 17, 20, 45).in_time_zone
ct23 = Time.utc(2015, 1, 16, 15, 7, 45).in_time_zone
ct24 = Time.utc(2015, 1, 11, 23, 50, 45).in_time_zone
ct25 = Time.utc(2015, 1, 10, 18, 41, 45).in_time_zone
ct26 = Time.utc(2015, 1, 10, 22, 10, 45).in_time_zone
ct27 = Time.utc(2015, 1, 10, 22, 35, 45).in_time_zone
ct28 = Time.utc(2015, 1, 3, 20, 2, 45).in_time_zone
ct29 = Time.utc(2015, 1, 3, 20, 3, 45).in_time_zone



posts = [
	



	{ body: 'wow', user_id: 1, created_at: pt01, updated_at: pt01 },
	{ body: 'so post, so face', user_id: 1, created_at: pt02, updated_at: pt02 },
	{ body: 'such doge', user_id: 1, created_at: pt03, updated_at: pt03 },
	{ body: 'wow', user_id: 1, created_at: pt04, updated_at: pt04 },
	{ body: 'Just doing some database seeding.', user_id: 2, created_at: pt05, updated_at: pt05 },
	{ body: 'This place is pretty cool right?', user_id: 2, created_at: pt06, updated_at: pt06 },
	{ body: 'Corgis are the best! Corgi corgi corgi corgi corgi', user_id: 3, created_at: pt07, updated_at: pt07 },
	{ body: 'Suck helium, defy gravity!', user_id: 4, created_at: pt08, updated_at: pt08 },
	{ body: 'Eat crayons, poop rainbows!', user_id: 4, created_at: pt09, updated_at: pt09 },
	{ body: 'I can\'t actually play the keyboard... :( ', user_id: 5, created_at: pt10, updated_at: pt10 },
	{ body: 'When life gives you lemons, crush them', user_id: 6, created_at: pt11, updated_at: pt11 },
	{ body: 'Why are all these people here? There are too many people on this earth. We need a new plague.', user_id: 7, created_at: pt12, updated_at: pt12 },
	{ body: 'MICHAEL!', user_id: 7, created_at: pt13, updated_at: pt13 },
	{ body: 'you may look around and see two groups here, white collar, blue collar. but i don’t see it that way, and you know why not? because i am collar blind.', user_id: 8, created_at: pt14, updated_at: pt14 },
	{ body: 'Say my name.', user_id: 9, created_at: pt15, updated_at: pt15 },
	{ body: 'This website is totally bomb yo', user_id: 10, created_at: pt16, updated_at: pt16 },
	{ body: 'Pain is temporary, failure is forever', user_id: 6, created_at: pt17, updated_at: pt17 },
	{ body: 'I need some non-traceable ammunition. Any connections?', user_id: 9, created_at: pt18, updated_at: pt18 }
]
comments = [
	{ body: 'fake comment', post_id: 0, user_id: 0 },




	{ body: 'is that all you can say?', post_id: 4, user_id: 2, created_at: ct01, updated_at: ct01 },
	{ body: 'wow', post_id: 4, user_id: 1, created_at: ct02, updated_at: ct02 },
	{ body: 'What does that mean!?', post_id: 2, user_id: 4, created_at: ct03, updated_at: ct03 },
	{ body: 'what?', post_id: 13, user_id: 8, created_at: ct04, updated_at: ct04 },
	{ body: 'I thought I should inform you that your biography is not updated. Noob.', post_id: 13, user_id: 7, created_at: ct05, updated_at: ct05 },
	{ body: 'you should be making sales. get back to work.', post_id: 13, user_id: 8, created_at: ct06, updated_at: ct06 },
	{ body: 'Oh, shouldn\'t you be managing a paper company?', post_id: 13, user_id: 7, created_at: ct07, updated_at: ct07 },
	{ body: 'i manage the paper company on my work time, dwight, not my break time, that would be stupid.', post_id: 13, user_id: 8, created_at: ct08, updated_at: ct08 },
	{ body: 'False. Cyberspace has no temperature.', post_id: 6, user_id: 7, created_at: ct09, updated_at: ct09 },
	{ body: 'cats are better', post_id: 7, user_id: 5, created_at: ct10, updated_at: ct10 },
	{ body: ':(', post_id: 7, user_id: 3, created_at: ct11, updated_at: ct11 },
	{ body: 'This website is orange.', post_id: 14, user_id: 7, created_at: ct12, updated_at: ct12 },
	{ body: 'it was a point dwight, god.', post_id: 14, user_id: 8, created_at: ct13, updated_at: ct13 },
	{ body: 'hahahaha', post_id: 10, user_id: 3, created_at: ct14, updated_at: ct14 },
	{ body: 'Learn it!', post_id: 10, user_id: 6, created_at: ct15, updated_at: ct15 },
	{ body: 'Do it yourself', post_id: 15, user_id: 10, created_at: ct16, updated_at: ct16 },
	{ body: 'Yeah you know it is!', post_id: 16, user_id: 2, created_at: ct17, updated_at: ct17 },
	{ body: 'many helium, such lift', post_id: 8, user_id: 1, created_at: ct18, updated_at: ct18 },
	{ body: 'I don\'t think that\'s what happens...', post_id: 8, user_id: 2, created_at: ct19, updated_at: ct19 },
	{ body: '$$$ is not a problem.', post_id: 18, user_id: 9, created_at: ct20, updated_at: ct20 },
	{ body: 'Yo mr white, you like CANNOT DO THAT HERE', post_id: 18, user_id: 10, created_at: ct21, updated_at: ct21 },
	{ body: 'False. Failure is subjective and therefore mortal.', post_id: 17, user_id: 7, created_at: ct22, updated_at: ct22 },
	{ body: 'this does not work.', post_id: 9, user_id: 8, created_at: ct23, updated_at: ct23 },
	{ body: 'bomb diggity yo', post_id: 5, user_id: 10, created_at: ct24, updated_at: ct24 },
	{ body: 'Yes but what is a "doge"?', post_id: 16, user_id: 9, created_at: ct25, updated_at: ct25 },
	{ body: 'Click the button in the bottom left', post_id: 16, user_id: 2, created_at: ct26, updated_at: ct26 },
	{ body: 'This does not shed any light on my question.', post_id: 16, user_id: 9, created_at: ct27, updated_at: ct27 },
	{ body: 'wow!', post_id: 1, user_id: 3, created_at: ct28, updated_at: ct28 },
	{ body: 'wow', post_id: 1, user_id: 1, created_at: ct29, updated_at: ct29 }
]

comment_likes = [
	{ comment_id: 2, user_id: 1 },
	{ comment_id: 9, user_id: 2 },

	{ comment_id: 11, user_id: 8 },

	{ comment_id: 13, user_id: 2 },
	{ comment_id: 13, user_id: 6 },

	{ comment_id: 16, user_id: 7 },

	{ comment_id: 17, user_id: 1 },
	{ comment_id: 17, user_id: 2 },
	{ comment_id: 17, user_id: 5 },
	{ comment_id: 17, user_id: 6 },
	{ comment_id: 17, user_id: 7 },

	{ comment_id: 19, user_id: 3 },

	{ comment_id: 23, user_id: 8 },

	{ comment_id: 24, user_id: 2 },
	{ comment_id: 24, user_id: 6 },

	{ comment_id: 26, user_id: 1 },

	{ comment_id: 28, user_id: 10 }

]


post_likes = [
	{ post_id: 1, user_id: 1 },
	{ post_id: 1, user_id: 3 },

	{ post_id: 5, user_id: 10 },

	{ post_id: 6, user_id: 1 },
	{ post_id: 6, user_id: 8 },

	{ post_id: 7, user_id: 4 },
	{ post_id: 7, user_id: 6 },

	{ post_id: 8, user_id: 5 },

	{ post_id: 9, user_id: 3 },
	{ post_id: 9, user_id: 5 },
	{ post_id: 9, user_id: 6 },

	{ post_id: 10, user_id: 1 },
	{ post_id: 10, user_id: 4 },
	{ post_id: 10, user_id: 6 },
	{ post_id: 10, user_id: 8 },

	{ post_id: 11, user_id: 7 },

	{ post_id: 12, user_id: 2 },
	{ post_id: 12, user_id: 6 },

	{ post_id: 14, user_id: 2 },

	{ post_id: 15, user_id: 5 },

	{ post_id: 16, user_id: 2 },
	{ post_id: 16, user_id: 10 },

	{ post_id: 17, user_id: 3 },
	{ post_id: 17, user_id: 4 }
]


images = [
	{ file_url: 'https://www.filepicker.io/api/file/AWICoL61S46RNGnHem5M', user_id: 1, profile: true },
	{ file_url: 'https://www.filepicker.io/api/file/iLQRbiXOR9mfOMHNf0L3', user_id: 1, profile: false },
	{ file_url: 'https://www.filepicker.io/api/file/ggo8AUGmRlKyDVDpGA3R', user_id: 1, profile: false },
	{ file_url: 'https://www.filepicker.io/api/file/JVjq0AZaTDWxgNqUlOjt', user_id: 1, profile: false },
	{ file_url: 'https://www.filepicker.io/api/file/0Rc3e2KWSXiAJkKvghxn',  user_id: 1, profile: false },
	{ file_url: 'https://www.filepicker.io/api/file/oBKSjtPSC27j5h3aBeQh', user_id: 1, profile: false },
	{ file_url: 'https://www.filepicker.io/api/file/gvmpD5h8T2Osi7bQDRpD', user_id: 1, profile: false },

	{ file_url: 'https://www.filepicker.io/api/file/27bd4zSrQ66UCYVQA0EA',  user_id: 2, profile: true },
	{ file_url: 'https://www.filepicker.io/api/file/8ya6YQ6fTsG762AK0LAb',  user_id: 2, profile: false },
	{ file_url: 'https://www.filepicker.io/api/file/crFCryM4RoCT1CHwWeXt',  user_id: 2, profile: false },
	{ file_url: 'https://www.filepicker.io/api/file/9sD5ZnnASJW6SdYx536i', user_id: 2, profile: false },
	{ file_url: 'https://www.filepicker.io/api/file/uRnhAj4SlGV8f5rqWIO4',  user_id: 2, profile: false },
	{ file_url: 'https://www.filepicker.io/api/file/CPkJwQzTei5xL1X3tDN3',  user_id: 2, profile: false },

	{ file_url: 'https://www.filepicker.io/api/file/bn0CkM0CR9q0132HQ4ZX', user_id: 3, profile: true },
	{ file_url: 'https://www.filepicker.io/api/file/QEj4GqQeRvt9AHD2tv58', user_id: 3, profile: false },
	{ file_url: 'https://www.filepicker.io/api/file/0sYsmUWITKut3jR4syCq', user_id: 3, profile: false },

	{ file_url: 'https://www.filepicker.io/api/file/aE7LsOoeTRWqho2Jf0lc', user_id: 4, profile: true },
	{ file_url: 'https://www.filepicker.io/api/file/9nqvP53BRHifHMYx9GIT', user_id: 4, profile: false },
	{ file_url: 'https://www.filepicker.io/api/file/4yiH3EA8RCOhIp6ofXpg', user_id: 4, profile: false },
	{ file_url: 'https://www.filepicker.io/api/file/gNwopu7JTquVCU17jgYR', user_id: 4, profile: false },
	{ file_url: 'https://www.filepicker.io/api/file/BVB7scYuQmOfoVtovRuU', user_id: 4, profile: false },

	{ file_url: 'https://www.filepicker.io/api/file/fO8QnAdSrO0AB9GDfhAF', user_id: 5, profile: true },
	{ file_url: 'https://www.filepicker.io/api/file/4oYIPbxTauUozDHa4ozd', user_id: 5, profile: false },

	{ file_url: 'https://www.filepicker.io/api/file/gJyyxBm6Te6yhaWcq1kx', user_id: 6, profile: false },
	{ file_url: 'https://www.filepicker.io/api/file/Dy8VSnP1TSBeCiIBQkTG', user_id: 6, profile: false },
	{ file_url: 'https://www.filepicker.io/api/file/aJFQanCIRXHUHFLH5dCF', user_id: 6, profile: true },
	{ file_url: 'https://www.filepicker.io/api/file/olRUE6qSantIM361TAQd', user_id: 6, profile: false },
	{ file_url: 'https://www.filepicker.io/api/file/jGYWRTTyOuOzvYxVDew6', user_id: 6, profile: false },

	{ file_url: 'https://www.filepicker.io/api/file/ygwackHmQMOTR8jCCOPp', user_id: 7, profile: true },
	{ file_url: 'https://www.filepicker.io/api/file/b6KNF0iHRMiTGxxcbdOC', user_id: 7, profile: false },
	{ file_url: 'https://www.filepicker.io/api/file/szyzzFebRWmYz6tjU3KQ',  user_id: 7, profile: false },
	{ file_url: 'https://www.filepicker.io/api/file/GXjIySMcTBiRZhVxPxPR', user_id: 7, profile: false },
	{ file_url: 'https://www.filepicker.io/api/file/iOSxZpFQZS39zWAmgDUQ', user_id: 7, profile: false },

	{ file_url: 'https://www.filepicker.io/api/file/zQIWzcQIQDOCpnpIRIrl', user_id: 8, profile: true },
	{ file_url: 'https://www.filepicker.io/api/file/s777mDYQ4y7BXRWYpTh7', user_id: 8, profile: false },

	{ file_url: 'https://www.filepicker.io/api/file/K34iuZNjR5jtFSo2SsEl', user_id: 9, profile: true },
	{ file_url: 'https://www.filepicker.io/api/file/eGvvgvnQzCoap1c3Jp7p', user_id: 9, profile: false },
	{ file_url: 'https://www.filepicker.io/api/file/xyhOlWA2T5qlfu24iuhJ', user_id: 9, profile: false },

	{ file_url: 'https://www.filepicker.io/api/file/8zVYSHASTm2pjNelEJxU', user_id: 10, profile: true }
]

# Creation

# User/profiles

users.each_with_index do |user, i|
	profile = profiles[i]

	@user = User.create(user)
	@profile = Profile.create(profile)
	@user.profile = @profile
end


Friendship.create(friendships)

Image.create(images)

Post.create(posts)

PostLike.create(post_likes)

Comment.create(comments)

CommentLike.create(comment_likes)


