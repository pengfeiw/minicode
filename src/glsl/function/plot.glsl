float plot(vec2 st) {    
    return smoothstep(0.02, 0.0, abs(st.y - st.x));
}

#pragma glslify: export(plot)
