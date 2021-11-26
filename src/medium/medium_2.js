import mpg_data from "./data/mpg_data.js";
import { getStatistics, getSum } from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */

function getavg() {
    var citys = 0;
    var highs = 0;
    var c = 0;
    for (const object of mpg_data) {
        citys += object.city_mpg;
        highs += object.highway_mpg;
        c += 1;
    }
    return { city: citys / c, highway: highs / c };
}

function getyears() {
    var years = [];
    for (const object of mpg_data) {
        years.push(object.year);
    }
    return years;
}
function getratio() {
    var hcount = 0;
    var tcount = 0;
    for (const object of mpg_data) {
        if (object.hybrid == true) {
            hcount += 1;
            tcount += 1;
        }
        else {
            tcount += 1;
        }
    }
    return hcount / tcount;
}
export const allCarStats = {
    avgMpg: getavg(),
    allYearStats: getStatistics(getyears()),
    ratioHybrids: getratio(),
};

function getmakesHcount() {
    var makesH = [];
    for (const object of mpg_data) {
        if (object.hybrid) {
            let exist = false;
            for (let entry of makesH) {
                if (entry["make"] == object.make) {
                    exist = true;
                    entry["hybrids"].push(object.id);
                    break;
                }
            }
            if (exist == false) {
                makesH.push({ "make": object.make, "hybrids": [object.id] });
            }
        }
    }
    makesH.sort((a,b)=>a["hybrids"].length-b["hybrids"].length);
    return makesH;
}

function getmoreStats(){
    var ms={};
    for (const object of mpg_data) {
        if(ms[object.year]){
            if (object.hybrid){
                ms[object.year]["hybrid"]["city"]+=object.city_mpg;
                ms[object.year]["hybrid"]["highway"]+=object.highway_mpg;
                ms[object.year]["hybrid"]["count"]+=1;
            }
            else{
                ms[object.year]["nothybrid"]["city"]+=object.city_mpg;
                ms[object.year]["nothybrid"]["highway"]+=object.highway_mpg;
                ms[object.year]["nothybrid"]["count"]+=1;
            }
        }
        else{
            ms[object.year] = {
                "hybrid":{
                    "city":0,
                    "highway":0,
                    "count":0
                },
                "nothybrid":{
                    "city":0,
                    "highway":0,
                    "count":0
                }
            }
        }
    }
    for (let year in ms){
        ms[year]["hybrid"]["city"]/=ms[year]["hybrid"]["count"];
        ms[year]["hybrid"]["highway"]/=ms[year]["hybrid"]["count"];
        ms[year]["nothybrid"]["city"]/=ms[year]["nothybrid"]["count"];
        ms[year]["nothybrid"]["highway"]/=ms[year]["nothybrid"]["count"];
        delete ms[year].hybrid.count;
        delete ms[year].nothybrid.count;
    }
    return ms;
}
/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
export const moreStats = {
    makerHybrids: getmakesHcount(),
    avgMpgByYearAndHybrid: getmoreStats()
};
