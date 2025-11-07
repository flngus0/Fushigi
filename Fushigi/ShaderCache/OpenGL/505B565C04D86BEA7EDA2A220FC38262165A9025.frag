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

layout (binding = 7, std140) uniform _fp_c6
{
    precise vec4 data[4096];
} fp_c6;

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (binding = 0) uniform sampler2D fp_t_tcb_20;
layout (binding = 1) uniform sampler2D fp_t_tcb_24;
layout (binding = 2) uniform sampler3D fp_t_cb7_20;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;
layout (location = 4) in vec4 in_attr4;

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
    precise vec3 temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise float temp_19;
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
    precise float temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    // 0x000008: 0x4C98079C0207000F Mov
    // 0x000010: 0xE003FF87CFF7FF02 Ipa
    // 0x000018: 0x4C9807980B47000B Mov
    // 0x000028: 0xE003FF870FF7FF00 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000030: 0x010404000007F009 Mov32i
    // 0x000038: 0xE003FF874FF7FF01 Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000048: 0x4C68100C04A70000 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000050: 0x5080000000470202 Mufu
    // 0x000058: 0x4C68100C04B70101 Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000068: 0xE043FF8C0027FF04 Ipa
    temp_8 = in_attr4.x;
    // 0x000070: 0xE043FF8C4027FF05 Ipa
    temp_9 = in_attr4.y;
    // 0x000078: 0xE043FF8C8027FF06 Ipa
    temp_10 = in_attr4.z;
    // 0x000088: 0xE043FF8A0027FF03 Ipa
    temp_11 = in_attr2.x;
    // 0x000090: 0xE043FF8A4027FF0C Ipa
    temp_12 = in_attr2.y;
    // 0x000098: 0xDEBA0000C0F70404 TexB
    temp_13 = texture(fp_t_cb7_20, vec3(temp_8, temp_9, temp_10)).x;
    // 0x0000A8: 0xD822020080170000 Texs
    temp_14 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_15 = temp_14.x;
    temp_16 = temp_14.y;
    temp_17 = temp_14.z;
    // 0x0000B0: 0xD82E024FF0C70303 Texs
    temp_18 = texture(fp_t_tcb_24, vec2(temp_11, temp_12)).w;
    // 0x0000B8: 0xE043FF8B0027FF0A Ipa
    temp_19 = in_attr3.x;
    // 0x0000C8: 0xE04BFF8B4027FF07 Ipa
    temp_20 = in_attr3.y;
    temp_21 = clamp(temp_20, 0.0, 1.0);
    // 0x0000D0: 0x4C98079802A7000E Mov
    // 0x0000D8: 0x4C9807980297000C Mov
    // 0x0000E8: 0x33A004C000070709 Ffma
    temp_22 = fma(temp_21, -2.0, 3.0);
    // 0x0000F0: 0x5C68100000770707 Fmul
    temp_23 = temp_21 * temp_21;
    // 0x0000F8: 0x5C68100000770907 Fmul
    temp_24 = temp_22 * temp_23;
    // 0x000108: 0xF0F0000034170000 Depbar
    // 0x000110: 0x49A505180BC7040A Ffma
    temp_25 = 0.0 - fp_c6.data[47].x;
    temp_26 = fma(temp_13, temp_25, temp_19);
    temp_27 = clamp(temp_26, 0.0, 1.0);
    // 0x000118: 0xE043FF898027FF04 Ipa
    temp_28 = in_attr1.z;
    // 0x000128: 0x51A205980B470106 Ffma
    temp_29 = 0.0 - fp_c6.data[45].x;
    temp_30 = fma(temp_16, fp_c6.data[45].x, temp_29);
    // 0x000130: 0xE04BFF88C027FF01 Ipa
    temp_31 = in_attr0.w;
    temp_32 = clamp(temp_31, 0.0, 1.0);
    // 0x000138: 0x51A205980B470809 Ffma
    temp_33 = 0.0 - fp_c6.data[45].x;
    temp_34 = fma(temp_17, fp_c6.data[45].x, temp_33);
    // 0x000148: 0x5080000000370A05 Mufu
    temp_35 = log2(temp_27);
    // 0x000150: 0x51A205980B470000 Ffma
    temp_36 = 0.0 - fp_c6.data[45].x;
    temp_37 = fma(temp_15, fp_c6.data[45].x, temp_36);
    // 0x000158: 0x4C9807980287000B Mov
    // 0x000168: 0x51A0061802970606 Ffma
    temp_38 = fma(temp_30, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x000170: 0x51A0059802870008 Ffma
    temp_39 = fma(temp_37, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x000178: 0x4C68101803770700 Fmul
    temp_40 = temp_24 * fp_c6.data[13].w;
    // 0x000188: 0x49A103180BF7060B Ffma
    temp_41 = 0.0 - fp_c6.data[47].w;
    temp_42 = fma(temp_38, temp_41, temp_38);
    // 0x000190: 0x4C6810180317050A Fmul
    temp_43 = temp_35 * fp_c6.data[12].y;
    // 0x000198: 0x51A0071802A70905 Ffma
    temp_44 = fma(temp_34, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x0001A8: 0x49A104180BF70809 Ffma
    temp_45 = 0.0 - fp_c6.data[47].w;
    temp_46 = fma(temp_39, temp_45, temp_39);
    // 0x0001B0: 0x49A2001803470002 Ffma
    temp_47 = 0.0 - temp_40;
    temp_48 = fma(temp_40, fp_c6.data[13].x, temp_47);
    // 0x0001B8: 0x5C60178000B7060B Fmnmx
    temp_49 = max(temp_38, temp_42);
    // 0x0001C8: 0x5C9807800FF70006 Mov
    // 0x0001D0: 0x5C90008000A7000C Rro
    // 0x0001D8: 0x49A102980BF7050A Ffma
    temp_50 = 0.0 - fp_c6.data[47].w;
    temp_51 = fma(temp_44, temp_50, temp_44);
    // 0x0001E8: 0x5080000000270C07 Mufu
    temp_52 = exp2(temp_43);
    // 0x0001F0: 0x5C60178000970809 Fmnmx
    temp_53 = max(temp_39, temp_46);
    // 0x0001F8: 0x49A2001803670008 Ffma
    temp_54 = 0.0 - temp_40;
    temp_55 = fma(temp_40, fp_c6.data[13].z, temp_54);
    // 0x000208: 0x5C60178000A7050A Fmnmx
    temp_56 = max(temp_44, temp_51);
    // 0x000210: 0x49A2001803570005 Ffma
    temp_57 = 0.0 - temp_40;
    temp_58 = fma(temp_40, fp_c6.data[13].y, temp_57);
    // 0x000218: 0x5C68100000370103 Fmul
    temp_59 = temp_32 * temp_18;
    // 0x000228: 0x59A0048000270900 Ffma
    temp_60 = fma(temp_53, temp_48, temp_53);
    // 0x000230: 0x4C58100C03870404 Fadd
    temp_61 = temp_28 + fp_c3.data[14].x;
    // 0x000238: 0x59A0050000870A02 Ffma
    temp_62 = fma(temp_56, temp_55, temp_56);
    // 0x000248: 0x4C68101802B70707 Fmul
    temp_63 = temp_52 * fp_c6.data[10].w;
    // 0x000250: 0x59A0058000570B01 Ffma
    temp_64 = fma(temp_49, temp_58, temp_49);
    // 0x000258: 0x4C68101402F70303 Fmul
    temp_65 = temp_59 * fp_c5.data[11].w;
    // 0x000268: 0x0103F4000007F005 Mov32i
    // 0x000270: 0x49A37F8C03C70404 Ffma
    temp_66 = 0.0 - fp_c3.data[15].x;
    temp_67 = fma(temp_61, temp_66, -0.0);
    // 0x000278: 0x5C68100000770000 Fmul
    temp_68 = temp_60 * temp_63;
    // 0x000288: 0x5C68100000770101 Fmul
    temp_69 = temp_64 * temp_63;
    // 0x000290: 0x5C68100000770202 Fmul
    temp_70 = temp_62 * temp_63;
    // 0x000298: 0x5C98078000370007 Mov
    // 0x0002A8: 0xE30000000007000F Exit
    out_attr0.x = temp_68;
    out_attr0.y = temp_69;
    out_attr0.z = temp_70;
    out_attr0.w = temp_65;
    out_attr1.x = temp_67;
    out_attr1.y = 0.75;
    out_attr1.z = 0.0;
    out_attr1.w = temp_65;
    return;
}
