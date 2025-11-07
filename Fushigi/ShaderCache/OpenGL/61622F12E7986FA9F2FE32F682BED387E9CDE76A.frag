#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_fragment_shader_interlock : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (binding = 0) uniform sampler2D fp_t_tcb_C;
layout (binding = 1) uniform sampler2D fp_t_tcb_24;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
    precise float temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise vec3 temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    precise float temp_37;
    // 0x000008: 0xE003FF87CFF7FF00 Ipa
    // 0x000010: 0xE003FF870FF7FF03 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000018: 0xE003FF874FF7FF04 Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000028: 0x5080000000470000 Mufu
    // 0x000030: 0x4C68100C04A70303 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000038: 0x4C68100C04B70404 Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000048: 0x4C5830140627030E Fadd
    temp_8 = 0.0 - fp_c5.data[24].z;
    temp_9 = temp_6 + temp_8;
    // 0x000050: 0xE043FF890007FF01 Ipa
    temp_10 = in_attr1.x;
    // 0x000058: 0x4C5830140627040D Fadd
    temp_11 = 0.0 - fp_c5.data[24].z;
    temp_12 = temp_7 + temp_11;
    // 0x000068: 0xE043FF894007FF02 Ipa
    temp_13 = in_attr1.y;
    // 0x000070: 0x4C5810140627030B Fadd
    temp_14 = temp_6 + fp_c5.data[24].z;
    // 0x000078: 0x4C5810140627040C Fadd
    temp_15 = temp_7 + fp_c5.data[24].z;
    // 0x000088: 0xD82A00CFF0D70E07 Texs
    temp_16 = texture(fp_t_tcb_C, vec2(temp_9, temp_12)).z;
    // 0x000090: 0xD82200CFF0C70B09 Texs
    temp_17 = texture(fp_t_tcb_C, vec2(temp_14, temp_15)).x;
    // 0x000098: 0xD82600CFF0D70B08 Texs
    temp_18 = texture(fp_t_tcb_C, vec2(temp_14, temp_12)).y;
    // 0x0000A8: 0xD82200C030470304 Texs
    temp_19 = texture(fp_t_tcb_C, vec2(temp_6, temp_7)).xyz;
    temp_20 = temp_19.x;
    temp_21 = temp_19.y;
    temp_22 = temp_19.z;
    // 0x0000B0: 0xD822024FF0270101 Texs
    temp_23 = texture(fp_t_tcb_24, vec2(temp_10, temp_13)).x;
    // 0x0000B8: 0xE043FF888007FF00 Ipa
    temp_24 = in_attr0.z;
    // 0x0000C8: 0xF0F0000034170000 Depbar
    // 0x0000D0: 0x4C68101402E7030A Fmul
    temp_25 = temp_22 * fp_c5.data[11].z;
    // 0x0000D8: 0x4C68101402C70406 Fmul
    temp_26 = temp_20 * fp_c5.data[11].x;
    // 0x0000E8: 0x4C68101402D70505 Fmul
    temp_27 = temp_21 * fp_c5.data[11].y;
    // 0x0000F0: 0x49A0051403270707 Ffma
    temp_28 = fma(temp_16, fp_c5.data[12].z, temp_25);
    // 0x0000F8: 0x4C58100C0387000A Fadd
    temp_29 = temp_24 + fp_c3.data[14].x;
    // 0x000108: 0x49A0031403070909 Ffma
    temp_30 = fma(temp_17, fp_c5.data[12].x, temp_26);
    // 0x000110: 0x49A0029403170808 Ffma
    temp_31 = fma(temp_18, fp_c5.data[12].y, temp_27);
    // 0x000118: 0x0103EC000007F005 Mov32i
    // 0x000128: 0x5C9807800FF70006 Mov
    // 0x000130: 0x4C68101406C70702 Fmul
    temp_32 = temp_28 * fp_c5.data[27].x;
    // 0x000138: 0x49A37F8C03C70A04 Ffma
    temp_33 = 0.0 - fp_c3.data[15].x;
    temp_34 = fma(temp_29, temp_33, -0.0);
    // 0x000148: 0x4C68101406C70900 Fmul
    temp_35 = temp_30 * fp_c5.data[27].x;
    // 0x000150: 0x4C68101406370103 Fmul
    temp_36 = temp_23 * fp_c5.data[24].w;
    // 0x000158: 0x4C68101406C70801 Fmul
    temp_37 = temp_31 * fp_c5.data[27].x;
    // 0x000168: 0x5C98078000370007 Mov
    // 0x000170: 0xE30000000007000F Exit
    out_attr0.x = temp_35;
    out_attr0.y = temp_37;
    out_attr0.z = temp_32;
    out_attr0.w = temp_36;
    out_attr1.x = temp_34;
    out_attr1.y = 0.375;
    out_attr1.z = 0.0;
    out_attr1.w = temp_36;
    return;
}
