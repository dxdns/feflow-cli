#!/usr/bin/env node
import banner from "./banner.js"
import init from "./init.js"
import start from "./start.js"

banner()

const args = process.argv.slice(2)

if (args[0] === "init") {
	await init()
} else if (args[0] === "start") {
	start(args[1])
}
