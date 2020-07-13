# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create username: "Flandre", password: "123456", picture: "https://lehoanglan.s3-ap-northeast-1.amazonaws.com/Hikari/images/38332081.png"
User.create username: "Remilia", password: "123456", picture: "https://lehoanglan.s3-ap-northeast-1.amazonaws.com/Hikari/images/52e177a2fc79153b68549049c14f558f.jpg"
User.create username: "Patchy", password: "123456", picture: "https://lehoanglan.s3-ap-northeast-1.amazonaws.com/Hikari/images/320px-Th105Patchouli.png"
User.create username: "Alice", password: "123456", picture: "https://lehoanglan.s3-ap-northeast-1.amazonaws.com/Hikari/images/320px-Th105Alice.png"
User.create username: "Kaguya", password: "123456", picture: "https://lehoanglan.s3-ap-northeast-1.amazonaws.com/Hikari/images/Kaguya_Houraisan.jpg"
User.create username: "Koakuma", password: "123456", picture: "https://lehoanglan.s3-ap-northeast-1.amazonaws.com/Hikari/images/Koakuma.full.1929163.jpg"
User.create username: "Marisa", password: "123456", picture: "https://lehoanglan.s3-ap-northeast-1.amazonaws.com/Hikari/images/download+(3).jpeg"
User.create username: "Sanae", password: "123456", picture: "https://lehoanglan.s3-ap-northeast-1.amazonaws.com/Hikari/images/1556187173129479363.jpg"
User.create username: "Junko", password: "123456", picture: "https://lehoanglan.s3-ap-northeast-1.amazonaws.com/Hikari/images/178e579a78a53693d0954c5ea7a83159.jpg"
User.create username: "Yuyuko", password: "123456", picture: "https://lehoanglan.s3-ap-northeast-1.amazonaws.com/Hikari/images/images+(1).jpeg"
streams = Stream.create [{user_id: 1, title: "Let's play PUBG"}, {user_id: 2, title: "Minecraft build a house"}, 
  {user_id: 3, title: "Path of exile arcmage endgame"}, {user_id: 4, title: "Path to diamond"},
    {user_id: 5, title: "Fortnite lets go"}, {user_id: 6, title: "No more donation"}, 
      {user_id: 7, title: "tonight im going to destroy this dude"}, {user_id: 8, title: "Lets play touhou"}, 
        {user_id: 9, title: "Necromancer endgame build"}]
categories = Category.create [{title: "PUBG", picture: "https://lehoanglan.s3-ap-northeast-1.amazonaws.com/Hikari/images/category_pubg.jpg"},
                              {title: "Minecraft", picture: "https://lehoanglan.s3-ap-northeast-1.amazonaws.com/Hikari/images/category_minecraft.jpeg"},
                              {title: "Diablo", picture: "https://lehoanglan.s3-ap-northeast-1.amazonaws.com/Hikari/images/category_diablo.png"},
                              {title: "League of legends", picture: "https://lehoanglan.s3-ap-northeast-1.amazonaws.com/Hikari/images/category_lol.jpg"},
                              {title: "Fortnite", picture: "https://lehoanglan.s3-ap-northeast-1.amazonaws.com/Hikari/images/category_fortnite.jpeg"},
                              {title: "Call of duty: WW2", picture: "https://lehoanglan.s3-ap-northeast-1.amazonaws.com/Hikari/images/category_cod.jpeg"},
                              {title: "Battlefield 1", picture: "https://lehoanglan.s3-ap-northeast-1.amazonaws.com/Hikari/images/category_bf1.jpeg"},
                              {title: "touhou", picture: "https://lehoanglan.s3-ap-northeast-1.amazonaws.com/Hikari/images/category_touhou.jpg"},
                              {title: "Diablo 3", picture: "https://lehoanglan.s3-ap-northeast-1.amazonaws.com/Hikari/images/category_diablo.png"}]
(0..8).each do |i|
  streams[i].media.build category_id: i
  streams[i].save
end