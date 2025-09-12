import express from "express";
import { Redis } from 'ioredis'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

const redisUrl = process.env.host as any

const redis = new Redis(redisUrl);
// app.use(express.json())

redis.subscribe("portal", "cams").then(k => {
    console.log("sub success");
})

redis

redis.publish("cams", "helloo")
// crud string
(async () => {

// error message
console.log("set 0 to ''",await redis.set("0",""))
// ts-ignore
// console.log("set 1 to null",await redis.set("1",null)) // send a error


//create
// console.log(await redis.set("req:rate", "name"))

// read
// console.log(await redis.get("req:rate"))

// overwrite
// console.log(await redis.set("req:rate", "ipo"))
// verify
// console.log("updated value", await redis.get("req:rate"))

// del
// console.log(await redis.del("req:rate"))
//verifing
// console.log("verifing if delete", await redis.get("req:rate"))

//adding expiry
// console.log("expring in 1 min", await redis.setex("expired1min", 1, "2"))
// await redis.set("now", "demo", "EX", 12) same command
// setTimeout(async () => console.log("after 1 second checking", await redis.get("expired1min")), 2000)

//getset command
// console.log("getset in redis", await redis.getset("counter", 10))
// console.log("using getset getting old value , setting 11", await redis.getset("counter", 11))
// console.log("now getting the latest entry ", await redis.get("counter"))

// append on string
// console.log("setting a string with expiry", await redis.set("mykey", "11212", "EX", 300))
// console.log("appending a string", await redis.append("mykey", "00"))
// console.log("getting updated string", await redis.get("mykey"))


// redis numbers same as string redis will do for typeing ourselves
// console.log("creating number", await redis.set("counter", 3))

// // increasing 
// console.log("increment number by 1", await redis.incr("counter"))
// console.log("increment number by 8", await redis.incrby("counter", 8))
// // console.log("increment number by 1.7", await redis.incrbyfloat("counter", 1.7))

// console.log("total counter now ", await redis.get("counter"))

// // decreasing a counter
// console.log("decrease by 1", await redis.decr("counter"))
// console.log("decrease by 1", await redis.decrby("counter", 8))
// // console.log("decraiig by 1", await redis.decrby("counter")) not found method
// console.log("final counter", await redis.get("counter"))



/**
 * list array
 *  we cna directly start a list using lpush and rpush command
 * list can be used for fifo lifo as it internally uses linked list
 */

// creating and reading a list 
console.log("creating an array with [1,2,3,4,5,6]", await redis.rpush("mylist",1,2,3,4,5,6))
console.log("verifing list op", await redis.lrange("mylist", 0, -1))


// updating a list
console.log("updarting a 1st ind to none", await redis.lset("mylist", 1, "none"))
console.log("verifing list op", await redis.lrange("mylist",0,-1))

// seraching or itrating
console.log("seraching for 5 in list", await redis.lpos("mylist","5") )

// length of list 
console.log("length of list", await redis.llen("mylist"))

// del a list
// del field inside list
console.log("del left side of data using pop last indedxes", await redis.lpop("mylist"))
console.log("del from right side of data using pop last index", await redis.rpop("mylist"))
// console.log("deleting an ele inside the list using ind", await redis.l)


console.log("verifing list op", await redis.lrange("mylist", 0 , -1))
// console.log("del field by index", await redis.)
// console.log("verifing and reading a list", await redis.lrange("mylist", 0, -1))


console.log("deleting list mylist", await redis.del("mylist"))
console.log("verifing list op", await redis.lrange("mylist", 0 , -1))


// redis hashmap
// console.log("creating hashmap", await redis.hset("foo", {name: "ravi", age: 12, g: "m"}))
// console.log("reading a field hashmap", await redis.hget("foo","name"))
// console.log("reading a whole hashmap", await redis.hgetall("foo"))

// updating a field
// for creating a whole hashmap foo we need to first delete then crete a whole hashmap
// console.log("updating a field", await redis.hset("foo", {
//     name: "none",
//     g: "f"
// }))
// console.log("check updated field", await redis.hgetall("foo"))


//deleting a field
// console.log("del field inside the hashmap", await redis.hdel("foo", "g"))
// console.log("check delete field", await redis.hgetall("foo"))
// // deleting entire field
// console.log("deletng entire hashmap", await redis.del("foo"))
// console.log("checking after deleting whole hashmap", await redis.hgetall("foo"))

// // hashmap adding expiry
// console.log("adding expiry in hashmap", await redis.multi().hset("obj", {"name":"ravi"}).expire("obj", 5).exec())
// console.log("checking a key before expiry", await redis.hgetall("obj"))
// setTimeout(async () => console.log( "after 10 second check hashmap exist", await redis.hgetall("obj")), 10000)


// reading buffer part
// console.log("reading a buffer hashmap", await redis.getBuffer("foo"))
// console.log("updating a key", await redis.())


// json

console.log("json creation",await redis.hsa )

// directly send the redis cli commadn from paramenter
// redis.call()

// bulk operation
// redis mset for setting value
// console.log("seeting mutiple values at once", await redis.mset("mykey", "1", "m1", "2", "m2", "3"))

// redis mget for getting mulitple values at once
// console.log("getting mutiple values at once", await redis.mget("counter", "mykey", "m1", "m2", "notsetkey"))

// redis pipeline is sending multiple comamand in one go but some comaand may fail
// const pipeline = await redis.pipeline()
// pipeline.set().get().exec()

// redis multi sending multiple command as atomicity (on command fail rest of command fail)
// redis.multi().set().del()
// .exec()

})()

//crud number

// crud list
// redis.sadd()

// app.listen(3000, () => {
//     console.log(`server started on ${3000}`)
// })