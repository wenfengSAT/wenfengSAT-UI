const playAll = true;

const cols = 3;
const gridEl = document.getElementById('grid');
const gridW = window.innerWidth;
const gridH = window.innerHeight;

const SETTINGS = [

    {
        instances: {
            spring: null,
            spinner: null
        },
        rebound: {
            tension: 10,
            friction: 19
        },
        spinner: {
            canvasW: gridW,
            canvasH: gridH,
            radius: 100,
            sides: 4, // The number of edges.
            depth: 30,
            colors: {
                background: '#fff0',
                stroke: '#f0f0f0',
                base: "null",
                child: '#ec4141'
            },
            alwaysForward: true, // When false the spring will reverse normally.
            restAt: 0.8, // A number from 0.1 to 0.9 || null for full rotation
            renderBase: true // Optionally render basePolygon
        }
    }


];