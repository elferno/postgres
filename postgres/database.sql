CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(50),
	"surname" VARCHAR(50)
);

CREATE TABLE "post" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR(100),
	"content" VARCHAR(255),
	"user_id" INTEGER,
	FOREIGN KEY ("user_id") REFERENCES "user" ("id")
);