-- CreateTable
CREATE TABLE "Movies" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT,
    "release_year" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "Movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genres" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Actors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,

    CONSTRAINT "Actors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GenresToMovies" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ActorsToMovies" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Movies_title_key" ON "Movies"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Movies_slug_key" ON "Movies"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Genres_description_key" ON "Genres"("description");

-- CreateIndex
CREATE UNIQUE INDEX "_GenresToMovies_AB_unique" ON "_GenresToMovies"("A", "B");

-- CreateIndex
CREATE INDEX "_GenresToMovies_B_index" ON "_GenresToMovies"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ActorsToMovies_AB_unique" ON "_ActorsToMovies"("A", "B");

-- CreateIndex
CREATE INDEX "_ActorsToMovies_B_index" ON "_ActorsToMovies"("B");

-- AddForeignKey
ALTER TABLE "_GenresToMovies" ADD CONSTRAINT "_GenresToMovies_A_fkey" FOREIGN KEY ("A") REFERENCES "Genres"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenresToMovies" ADD CONSTRAINT "_GenresToMovies_B_fkey" FOREIGN KEY ("B") REFERENCES "Movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActorsToMovies" ADD CONSTRAINT "_ActorsToMovies_A_fkey" FOREIGN KEY ("A") REFERENCES "Actors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActorsToMovies" ADD CONSTRAINT "_ActorsToMovies_B_fkey" FOREIGN KEY ("B") REFERENCES "Movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
