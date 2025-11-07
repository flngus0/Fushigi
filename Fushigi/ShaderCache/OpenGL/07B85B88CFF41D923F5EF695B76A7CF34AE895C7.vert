#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_shader_draw_parameters : enable
#extension GL_ARB_shader_viewport_layer_array : enable
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

layout (binding = 8, std140) uniform _vp_c7
{
    precise vec4 data[4096];
} vp_c7;

layout (binding = 7, std140) uniform _vp_c6
{
    precise vec4 data[4096];
} vp_c6;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (binding = 2, std140) uniform _vp_c1
{
    precise vec4 data[4096];
} vp_c1;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 8) in vec4 in_attr8;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;
layout (location = 7) out vec4 out_attr7;
layout (location = 8) out vec4 out_attr8;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    int temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
    precise float temp_13;
    precise float temp_14;
    int temp_15;
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
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    precise float temp_126;
    precise float temp_127;
    int temp_128;
    uint temp_129;
    uint temp_130;
    int temp_131;
    precise float temp_132;
    precise float temp_133;
    int temp_134;
    uint temp_135;
    uint temp_136;
    int temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    int temp_147;
    uint temp_148;
    uint temp_149;
    int temp_150;
    precise float temp_151;
    int temp_152;
    uint temp_153;
    int temp_154;
    precise float temp_155;
    precise float temp_156;
    int temp_157;
    uint temp_158;
    uint temp_159;
    int temp_160;
    precise float temp_161;
    int temp_162;
    uint temp_163;
    int temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    precise float temp_170;
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    precise float temp_180;
    precise float temp_181;
    precise float temp_182;
    precise float temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    precise float temp_193;
    precise float temp_194;
    precise float temp_195;
    precise float temp_196;
    precise float temp_197;
    precise float temp_198;
    precise float temp_199;
    precise float temp_200;
    precise float temp_201;
    precise float temp_202;
    precise float temp_203;
    precise float temp_204;
    precise float temp_205;
    precise float temp_206;
    precise float temp_207;
    precise float temp_208;
    precise float temp_209;
    precise float temp_210;
    precise float temp_211;
    precise float temp_212;
    precise float temp_213;
    precise float temp_214;
    precise float temp_215;
    precise float temp_216;
    precise float temp_217;
    precise float temp_218;
    precise float temp_219;
    precise float temp_220;
    precise float temp_221;
    precise float temp_222;
    precise float temp_223;
    precise float temp_224;
    precise float temp_225;
    precise float temp_226;
    precise float temp_227;
    precise float temp_228;
    precise float temp_229;
    precise float temp_230;
    precise float temp_231;
    precise float temp_232;
    precise float temp_233;
    precise float temp_234;
    precise float temp_235;
    precise float temp_236;
    precise float temp_237;
    precise float temp_238;
    precise float temp_239;
    precise float temp_240;
    precise float temp_241;
    precise float temp_242;
    precise float temp_243;
    precise float temp_244;
    precise float temp_245;
    precise float temp_246;
    precise float temp_247;
    precise float temp_248;
    precise float temp_249;
    precise float temp_250;
    precise float temp_251;
    precise float temp_252;
    precise float temp_253;
    precise float temp_254;
    precise float temp_255;
    precise float temp_256;
    precise float temp_257;
    precise float temp_258;
    precise float temp_259;
    precise float temp_260;
    precise float temp_261;
    precise float temp_262;
    precise float temp_263;
    precise float temp_264;
    precise float temp_265;
    precise float temp_266;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C9807980CC70000 Mov
    // 0x000010: 0xEFD87F800807FF08 Ald
    temp_0 = in_attr0.x;
    // 0x000018: 0x4C9807980CD70001 Mov
    // 0x000028: 0xEFD87F800847FF06 Ald
    temp_1 = in_attr0.y;
    // 0x000030: 0x4C9807980CE70002 Mov
    // 0x000038: 0xEFD87F800887FF07 Ald
    temp_2 = in_attr0.z;
    // 0x000048: 0x4C6810180CC70000 Fmul
    temp_3 = vp_c6.data[51].x * vp_c6.data[51].x;
    // 0x000050: 0xEFD87F800AC7FF19 Ald
    temp_4 = in_attr2.w;
    // 0x000058: 0x4C9807980CF70015 Mov
    // 0x000068: 0x4CB0119002371A1C F2i
    temp_5 = trunc(vp_c4.data[8].w);
    temp_6 = int(temp_5);
    // 0x000070: 0x49A000180CD70100 Ffma
    temp_7 = fma(vp_c6.data[51].y, vp_c6.data[51].y, temp_3);
    // 0x000078: 0x49A000180CE70202 Ffma
    temp_8 = fma(vp_c6.data[51].z, vp_c6.data[51].z, temp_7);
    // 0x000088: 0x4C68101000470800 Fmul
    temp_9 = temp_0 * vp_c4.data[1].x;
    // 0x000090: 0x5080000000570202 Mufu
    temp_10 = inversesqrt(temp_8);
    // 0x000098: 0x4C68101000070803 Fmul
    temp_11 = temp_0 * vp_c4.data[0].x;
    // 0x0000A8: 0x4C68101000870801 Fmul
    temp_12 = temp_0 * vp_c4.data[2].x;
    // 0x0000B0: 0x5C68100000870814 Fmul
    temp_13 = temp_0 * temp_0;
    // 0x0000B8: 0xEFD87F800947FF08 Ald
    temp_14 = in_attr1.y;
    // 0x0000C8: 0x3848000000471C1C Shl
    temp_15 = temp_6 << 4;
    // 0x0000D0: 0x49A0001000570600 Ffma
    temp_16 = fma(temp_1, vp_c4.data[1].y, temp_9);
    // 0x0000D8: 0x49A0019000170605 Ffma
    temp_17 = fma(temp_1, vp_c4.data[0].y, temp_11);
    // 0x0000E8: 0x49A0009000970604 Ffma
    temp_18 = fma(temp_1, vp_c4.data[2].y, temp_12);
    // 0x0000F0: 0x59A00A0000670614 Ffma
    temp_19 = fma(temp_1, temp_1, temp_13);
    // 0x0000F8: 0x49A0001000670700 Ffma
    temp_20 = fma(temp_2, vp_c4.data[1].z, temp_16);
    // 0x000108: 0x4C6810180CC70203 Fmul
    temp_21 = temp_10 * vp_c6.data[51].x;
    // 0x000110: 0x49A0029000270709 Ffma
    temp_22 = fma(temp_2, vp_c4.data[0].z, temp_17);
    // 0x000118: 0x4C6810180CE70201 Fmul
    temp_23 = temp_10 * vp_c6.data[51].z;
    // 0x000128: 0x4C6810180CD70202 Fmul
    temp_24 = temp_10 * vp_c6.data[51].y;
    // 0x000130: 0x59A00A0000770714 Ffma
    temp_25 = fma(temp_2, temp_2, temp_19);
    // 0x000138: 0x4C58101000770005 Fadd
    temp_26 = temp_20 + vp_c4.data[1].w;
    // 0x000148: 0x5080000000871414 Mufu
    temp_27 = sqrt(temp_25);
    // 0x000150: 0x49A101980CF7030A Ffma
    temp_28 = 0.0 - vp_c6.data[51].w;
    temp_29 = fma(temp_21, temp_28, temp_21);
    // 0x000158: 0x49A0021000A70700 Ffma
    temp_30 = fma(temp_2, vp_c4.data[2].z, temp_18);
    // 0x000168: 0x4C58101000370904 Fadd
    temp_31 = temp_22 + vp_c4.data[0].w;
    // 0x000170: 0x49A100980CF70109 Ffma
    temp_32 = 0.0 - vp_c6.data[51].w;
    temp_33 = fma(temp_23, temp_32, temp_23);
    // 0x000178: 0x4C6810140967050B Fmul
    temp_34 = temp_26 * vp_c5.data[37].z;
    // 0x000188: 0x1E23DCCCCCD70A0A Fmul32i
    temp_35 = temp_29 * 0.100000001;
    // 0x000190: 0x4C58101000B70000 Fadd
    temp_36 = temp_30 + vp_c4.data[2].w;
    // 0x000198: 0x4C5830100037040C Fadd
    temp_37 = 0.0 - vp_c4.data[0].w;
    temp_38 = temp_31 + temp_37;
    // 0x0001A8: 0x1E23DCCCCCD70909 Fmul32i
    temp_39 = temp_33 * 0.100000001;
    // 0x0001B0: 0x4C5830100077050E Fadd
    temp_40 = 0.0 - vp_c4.data[1].w;
    temp_41 = temp_26 + temp_40;
    // 0x0001B8: 0x59A1058000A7040A Ffma
    temp_42 = 0.0 - temp_35;
    temp_43 = fma(temp_31, temp_42, temp_34);
    // 0x0001C8: 0x4C98079C2307000B Mov
    // 0x0001D0: 0x59A0050000970009 Ffma
    temp_44 = fma(temp_36, temp_39, temp_43);
    // 0x0001D8: 0x32A004BF00070B0A Ffma
    temp_45 = fma(vp_c7.data[140].x, 0.5, temp_44);
    // 0x0001E8: 0x4C58301000B70009 Fadd
    temp_46 = 0.0 - vp_c4.data[2].w;
    temp_47 = temp_36 + temp_46;
    // 0x0001F0: 0x5C69100000C7FF0B Fmul
    temp_48 = 0.0 - temp_38;
    temp_49 = 0.0 * temp_48;
    // 0x0001F8: 0x5C90000000A70010 Rro
    // 0x000208: 0x3868104040070A0F Fmul
    temp_50 = temp_45 * 3.0;
    // 0x000210: 0x5080000000071010 Mufu
    temp_51 = cos(temp_45);
    // 0x000218: 0x59A207000097FF0D Ffma
    temp_52 = 0.0 - temp_41;
    temp_53 = fma(0.0, temp_47, temp_52);
    // 0x000228: 0x38681040A0070A11 Fmul
    temp_54 = temp_45 * 5.0;
    // 0x000230: 0x4C68101409770A13 Fmul
    temp_55 = temp_45 * vp_c5.data[37].w;
    // 0x000238: 0xEFD87F800A47FF0A Ald
    temp_56 = in_attr2.y;
    // 0x000248: 0x59A106000097FF0C Ffma
    temp_57 = 0.0 - temp_47;
    temp_58 = fma(0.0, temp_57, temp_38);
    // 0x000250: 0xEFD87F800A07FF09 Ald
    temp_59 = in_attr2.x;
    // 0x000258: 0x5C90000000F70012 Rro
    // 0x000268: 0x59A0058000E7FF0E Ffma
    temp_60 = fma(0.0, temp_41, temp_49);
    // 0x000270: 0x5080000000071212 Mufu
    temp_61 = cos(temp_50);
    // 0x000278: 0x5C68100000D7030F Fmul
    temp_62 = temp_21 * temp_53;
    // 0x000288: 0xEFD87F801047FF0B Ald
    temp_63 = in_attr8.y;
    // 0x000290: 0x5C90000001170011 Rro
    // 0x000298: 0xEFD87F800907FF0D Ald
    temp_64 = in_attr1.x;
    // 0x0002A8: 0x5C90000001370013 Rro
    // 0x0002B0: 0x5080000000071111 Mufu
    temp_65 = cos(temp_54);
    // 0x0002B8: 0x5C68100001071010 Fmul
    temp_66 = temp_51 * temp_51;
    // 0x0002C8: 0x5080000000171313 Mufu
    temp_67 = sin(temp_55);
    // 0x0002D0: 0x59A0078000C7020C Ffma
    temp_68 = fma(temp_24, temp_58, temp_62);
    // 0x0002D8: 0xEFD87F801007FF0F Ald
    temp_69 = in_attr8.x;
    // 0x0002E8: 0x5C68100001470303 Fmul
    temp_70 = temp_21 * temp_27;
    // 0x0002F0: 0x5C68100001470202 Fmul
    temp_71 = temp_24 * temp_27;
    // 0x0002F8: 0x5C68100001271012 Fmul
    temp_72 = temp_66 * temp_61;
    // 0x000308: 0x59A0060000E70110 Ffma
    temp_73 = fma(temp_23, temp_60, temp_68);
    // 0x000310: 0xEFD87F800A87FF0E Ald
    temp_74 = in_attr2.z;
    // 0x000318: 0x5C68100001470101 Fmul
    temp_75 = temp_23 * temp_27;
    // 0x000328: 0xEFD87F800987FF0C Ald
    temp_76 = in_attr1.z;
    // 0x000330: 0x5C68120001171206 Fmul
    temp_77 = temp_72 * 0.5;
    temp_78 = temp_77 * temp_65;
    // 0x000338: 0x4C98079400270012 Mov
    // 0x000348: 0x4C98079400370011 Mov
    // 0x000350: 0x1E23DCCCCCD71313 Fmul32i
    temp_79 = temp_67 * 0.100000001;
    // 0x000358: 0x4C68101000870907 Fmul
    temp_80 = temp_59 * vp_c4.data[2].x;
    // 0x000368: 0x4C68101000070917 Fmul
    temp_81 = temp_59 * vp_c4.data[0].x;
    // 0x000370: 0x4C68101000470918 Fmul
    temp_82 = temp_59 * vp_c4.data[1].x;
    // 0x000378: 0x51A0091400470B12 Ffma
    temp_83 = fma(temp_63, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000388: 0x51A0089400570B11 Ffma
    temp_84 = fma(temp_63, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000390: 0x59A009800067100B Ffma
    temp_85 = fma(temp_73, temp_78, temp_79);
    // 0x000398: 0x4C68101409571510 Fmul
    temp_86 = vp_c6.data[51].w * vp_c5.data[37].y;
    // 0x0003A8: 0x49A0039000970A09 Ffma
    temp_87 = fma(temp_56, vp_c4.data[2].y, temp_80);
    // 0x0003B0: 0x4C68101000470D13 Fmul
    temp_88 = temp_64 * vp_c4.data[1].x;
    // 0x0003B8: 0x49A0091400070F07 Ffma
    temp_89 = fma(temp_69, vp_c5.data[0].x, temp_83);
    // 0x0003C8: 0x4C68101000870D1A Fmul
    temp_90 = temp_64 * vp_c4.data[2].x;
    // 0x0003D0: 0xEFF07F800D07FF07 Ast
    out_attr5.x = temp_89;
    // 0x0003D8: 0x4C68101000070D15 Fmul
    temp_91 = temp_64 * vp_c4.data[0].x;
    // 0x0003E8: 0x5C68100000B71012 Fmul
    temp_92 = temp_86 * temp_85;
    // 0x0003F0: 0x49A00B9000170A17 Ffma
    temp_93 = fma(temp_56, vp_c4.data[0].y, temp_81);
    // 0x0003F8: 0x49A00C1000570A18 Ffma
    temp_94 = fma(temp_56, vp_c4.data[1].y, temp_82);
    // 0x000408: 0x49A009900057080D Ffma
    temp_95 = fma(temp_14, vp_c4.data[1].y, temp_88);
    // 0x000410: 0x49A00D100097081A Ffma
    temp_96 = fma(temp_14, vp_c4.data[2].y, temp_90);
    // 0x000418: 0x49A00A9000170815 Ffma
    temp_97 = fma(temp_14, vp_c4.data[0].y, temp_91);
    // 0x000428: 0x5C90000001270013 Rro
    // 0x000430: 0x49A0089400170F08 Ffma
    temp_98 = fma(temp_69, vp_c5.data[0].y, temp_84);
    // 0x000438: 0x508000000007130F Mufu
    temp_99 = cos(temp_92);
    // 0x000448: 0x49A0049000A70E09 Ffma
    temp_100 = fma(temp_74, vp_c4.data[2].z, temp_87);
    // 0x000450: 0xEFF07F800D47FF08 Ast
    out_attr5.y = temp_98;
    // 0x000458: 0x49A00B9000270E0A Ffma
    temp_101 = fma(temp_74, vp_c4.data[0].z, temp_93);
    // 0x000468: 0x49A00C1000670E0B Ffma
    temp_102 = fma(temp_74, vp_c4.data[1].z, temp_94);
    // 0x000470: 0x508000000017130E Mufu
    temp_103 = sin(temp_92);
    // 0x000478: 0x49A00A9000270C11 Ffma
    temp_104 = fma(temp_76, vp_c4.data[0].z, temp_97);
    // 0x000488: 0x49A0069000670C18 Ffma
    temp_105 = fma(temp_76, vp_c4.data[1].z, temp_95);
    // 0x000490: 0x49A00D1000A70C1A Ffma
    temp_106 = fma(temp_76, vp_c4.data[2].z, temp_96);
    // 0x000498: 0x5C6810000037100C Fmul
    temp_107 = temp_86 * temp_70;
    // 0x0004A8: 0x5C6810000027100D Fmul
    temp_108 = temp_86 * temp_71;
    // 0x0004B0: 0x5C68100000171010 Fmul
    temp_109 = temp_86 * temp_75;
    // 0x0004B8: 0x5C68100001171112 Fmul
    temp_110 = temp_104 * temp_104;
    // 0x0004C8: 0x4C98079000B70014 Mov
    // 0x0004D0: 0x4C68101000770F03 Fmul
    temp_111 = temp_99 * vp_c4.data[1].w;
    // 0x0004D8: 0x5C68100000C7060C Fmul
    temp_112 = temp_78 * temp_107;
    // 0x0004E8: 0x5C68100000D7060D Fmul
    temp_113 = temp_78 * temp_108;
    // 0x0004F0: 0x5C68100001070610 Fmul
    temp_114 = temp_78 * temp_109;
    // 0x0004F8: 0x4C69101000770E01 Fmul
    temp_115 = 0.0 - vp_c4.data[1].w;
    temp_116 = temp_103 * temp_115;
    // 0x000508: 0x59A0090001871813 Ffma
    temp_117 = fma(temp_105, temp_105, temp_110);
    // 0x000510: 0x5C68100000A70A12 Fmul
    temp_118 = temp_101 * temp_101;
    // 0x000518: 0x4C59101000B71402 Fadd
    temp_119 = 0.0 - vp_c4.data[2].w;
    temp_120 = temp_119 + vp_c4.data[2].w;
    // 0x000528: 0x49A3019000370E03 Ffma
    temp_121 = 0.0 - vp_c4.data[0].w;
    temp_122 = 0.0 - temp_111;
    temp_123 = fma(temp_103, temp_121, temp_122);
    // 0x000530: 0x49A3009000370F01 Ffma
    temp_124 = 0.0 - vp_c4.data[0].w;
    temp_125 = 0.0 - temp_116;
    temp_126 = fma(temp_99, temp_124, temp_125);
    // 0x000538: 0x59A0098001A71A1B Ffma
    temp_127 = fma(temp_106, temp_106, temp_117);
    // 0x000548: 0xEF94007068871C13 Ldc
    temp_128 = temp_15 + 0x688;
    temp_129 = uint(temp_128) >> 2;
    temp_130 = temp_129 >> 2;
    temp_131 = int(temp_129) & 3;
    temp_132 = vp_c7.data[int(temp_130)][temp_131];
    // 0x000550: 0x59A0090000B70B14 Ffma
    temp_133 = fma(temp_102, temp_102, temp_118);
    // 0x000558: 0xEF94007048871C12 Ldc
    temp_134 = temp_15 + 0x488;
    temp_135 = uint(temp_134) >> 2;
    temp_136 = temp_135 >> 2;
    temp_137 = int(temp_135) & 3;
    temp_138 = vp_c7.data[int(temp_136)][temp_137];
    // 0x000568: 0x5C58100000270002 Fadd
    temp_139 = temp_36 + temp_120;
    // 0x000570: 0x5080000000571B1B Mufu
    temp_140 = inversesqrt(temp_127);
    // 0x000578: 0x4C58101000770303 Fadd
    temp_141 = temp_123 + vp_c4.data[1].w;
    // 0x000588: 0x4C58101000370101 Fadd
    temp_142 = temp_126 + vp_c4.data[0].w;
    // 0x000590: 0x59A00A0000970914 Ffma
    temp_143 = fma(temp_100, temp_100, temp_133);
    // 0x000598: 0x59A001000057FF15 Ffma
    temp_144 = fma(0.0, temp_26, temp_139);
    // 0x0005A8: 0x5080000000571414 Mufu
    temp_145 = inversesqrt(temp_143);
    // 0x0005B0: 0x59A001800007FF16 Ffma
    temp_146 = fma(0.0, temp_36, temp_141);
    // 0x0005B8: 0xEF95007068071C02 Ldc
    temp_147 = temp_15 + 0x680;
    temp_148 = uint(temp_147) >> 2;
    temp_149 = temp_148 >> 2;
    temp_150 = int(temp_148) & 3;
    temp_151 = vp_c7.data[int(temp_149)][temp_150];
    temp_152 = int(temp_148) + 1;
    temp_153 = uint(temp_152) >> 2;
    temp_154 = temp_152 & 3;
    temp_155 = vp_c7.data[int(temp_153)][temp_154];
    // 0x0005C8: 0x59A000800007FF17 Ffma
    temp_156 = fma(0.0, temp_36, temp_142);
    // 0x0005D0: 0xEF95007048071C00 Ldc
    temp_157 = temp_15 + 0x480;
    temp_158 = uint(temp_157) >> 2;
    temp_159 = temp_158 >> 2;
    temp_160 = int(temp_158) & 3;
    temp_161 = vp_c7.data[int(temp_159)][temp_160];
    temp_162 = int(temp_158) + 1;
    temp_163 = uint(temp_162) >> 2;
    temp_164 = temp_162 & 3;
    temp_165 = vp_c7.data[int(temp_163)][temp_164];
    // 0x0005D8: 0x59A10A800047FF15 Ffma
    temp_166 = 0.0 - temp_31;
    temp_167 = fma(0.0, temp_166, temp_144);
    // 0x0005E8: 0x5C68100001B71A1A Fmul
    temp_168 = temp_106 * temp_140;
    // 0x0005F0: 0x59A10B8000E7051D Ffma
    temp_169 = 0.0 - temp_103;
    temp_170 = fma(temp_26, temp_169, temp_156);
    // 0x0005F8: 0xEFF07F800887FF1A Ast
    out_attr0.z = temp_168;
    // 0x000608: 0x59A00B0000F70505 Ffma
    temp_171 = fma(temp_26, temp_99, temp_146);
    // 0x000610: 0x5C68100001470B0B Fmul
    temp_172 = temp_102 * temp_145;
    // 0x000618: 0x5C68100001B71111 Fmul
    temp_173 = temp_104 * temp_140;
    // 0x000628: 0xEFF07F800947FF0B Ast
    out_attr1.y = temp_172;
    // 0x000630: 0x59A00E8000F7041D Ffma
    temp_174 = fma(temp_31, temp_99, temp_170);
    // 0x000638: 0xEFF07F800807FF11 Ast
    out_attr0.x = temp_173;
    // 0x000648: 0x5C68100001470906 Fmul
    temp_175 = temp_100 * temp_145;
    // 0x000650: 0x49A00A8400071010 Ffma
    temp_176 = fma(temp_114, vp_c1.data[0].x, temp_167);
    // 0x000658: 0xEFF07F800987FF06 Ast
    out_attr1.z = temp_175;
    // 0x000668: 0x59A0028000E70404 Ffma
    temp_177 = fma(temp_31, temp_103, temp_171);
    // 0x000670: 0x5C68100001B71818 Fmul
    temp_178 = temp_105 * temp_140;
    // 0x000678: 0x5C68100001470A05 Fmul
    temp_179 = temp_101 * temp_145;
    // 0x000688: 0xEFF07F800847FF18 Ast
    out_attr0.y = temp_178;
    // 0x000690: 0x5C68100001A70B09 Fmul
    temp_180 = temp_172 * temp_168;
    // 0x000698: 0xEFF07F800907FF05 Ast
    out_attr1.x = temp_179;
    // 0x0006A8: 0x49A00E8400070C1D Ffma
    temp_181 = fma(temp_112, vp_c1.data[0].x, temp_174);
    // 0x0006B0: 0x5C6810000117060F Fmul
    temp_182 = temp_175 * temp_173;
    // 0x0006B8: 0x59A0098001271012 Ffma
    temp_183 = fma(temp_176, temp_138, temp_132);
    // 0x0006C8: 0x49A0020400070D04 Ffma
    temp_184 = fma(temp_113, vp_c1.data[0].x, temp_177);
    // 0x0006D0: 0x5C6810000187050A Fmul
    temp_185 = temp_179 * temp_178;
    // 0x0006D8: 0x59A204800187060C Ffma
    temp_186 = 0.0 - temp_180;
    temp_187 = fma(temp_175, temp_178, temp_186);
    // 0x0006E8: 0x59A0010000071D00 Ffma
    temp_188 = fma(temp_181, temp_161, temp_151);
    // 0x0006F0: 0x59A2078001A70507 Ffma
    temp_189 = 0.0 - temp_182;
    temp_190 = fma(temp_179, temp_168, temp_189);
    // 0x0006F8: 0x4C5810180BA71209 Fadd
    temp_191 = temp_183 + vp_c6.data[46].z;
    // 0x000708: 0x59A0018000170404 Ffma
    temp_192 = fma(temp_184, temp_165, temp_155);
    // 0x000710: 0x59A2050001170B0A Ffma
    temp_193 = 0.0 - temp_185;
    temp_194 = fma(temp_172, temp_173, temp_193);
    // 0x000718: 0x5C68100001970C10 Fmul
    temp_195 = temp_187 * temp_4;
    // 0x000728: 0x4C68100C00070001 Fmul
    temp_196 = temp_188 * vp_c3.data[0].x;
    // 0x000730: 0xEFF07F800A07FF10 Ast
    out_attr2.x = temp_195;
    // 0x000738: 0x5C68100001970707 Fmul
    temp_197 = temp_190 * temp_4;
    // 0x000748: 0x4C6810180C270903 Fmul
    temp_198 = temp_191 * vp_c6.data[48].z;
    // 0x000750: 0xEFF07F800A47FF07 Ast
    out_attr2.y = temp_197;
    // 0x000758: 0x4C5810180B970402 Fadd
    temp_199 = temp_192 + vp_c6.data[46].y;
    // 0x000768: 0x4C6810180C670908 Fmul
    temp_200 = temp_191 * vp_c6.data[49].z;
    // 0x000770: 0x5C68100001970A19 Fmul
    temp_201 = temp_194 * temp_4;
    // 0x000778: 0x4C68100C0047000A Fmul
    temp_202 = temp_188 * vp_c3.data[1].x;
    // 0x000788: 0xEFF07F800A87FF19 Ast
    out_attr2.z = temp_201;
    // 0x000790: 0x4C68100C00870005 Fmul
    temp_203 = temp_188 * vp_c3.data[2].x;
    // 0x000798: 0x4C6810180CA7090C Fmul
    temp_204 = temp_191 * vp_c6.data[50].z;
    // 0x0007A8: 0x49A0008C00170409 Ffma
    temp_205 = fma(temp_192, vp_c3.data[0].y, temp_196);
    // 0x0007B0: 0x49A001980C170201 Ffma
    temp_206 = fma(temp_199, vp_c6.data[48].y, temp_198);
    // 0x0007B8: 0x49A004180C570203 Ffma
    temp_207 = fma(temp_199, vp_c6.data[49].y, temp_200);
    // 0x0007C8: 0x4C58101002071208 Fadd
    temp_208 = temp_183 + vp_c4.data[8].x;
    // 0x0007D0: 0x49A0050C0057040D Ffma
    temp_209 = fma(temp_192, vp_c3.data[1].y, temp_202);
    // 0x0007D8: 0x49A0028C00970405 Ffma
    temp_210 = fma(temp_192, vp_c3.data[2].y, temp_203);
    // 0x0007E8: 0x49A006180C970202 Ffma
    temp_211 = fma(temp_199, vp_c6.data[50].y, temp_204);
    // 0x0007F0: 0x49A0048C0027120C Ffma
    temp_212 = fma(temp_183, vp_c3.data[0].z, temp_205);
    // 0x0007F8: 0x4C5830180B17040B Fadd
    temp_213 = 0.0 - vp_c6.data[44].y;
    temp_214 = temp_192 + temp_213;
    // 0x000808: 0x4C58300C03370406 Fadd
    temp_215 = 0.0 - vp_c3.data[12].w;
    temp_216 = temp_192 + temp_215;
    // 0x000810: 0x49A0068C0067120A Ffma
    temp_217 = fma(temp_183, vp_c3.data[1].z, temp_209);
    // 0x000818: 0xEFF07F800B47FF06 Ast
    out_attr3.y = temp_216;
    // 0x000828: 0x49A0048C00270809 Ffma
    temp_218 = fma(temp_208, vp_c3.data[0].z, temp_205);
    // 0x000830: 0x49A0068C0067080D Ffma
    temp_219 = fma(temp_208, vp_c3.data[1].z, temp_209);
    // 0x000838: 0x49A0028C00A70804 Ffma
    temp_220 = fma(temp_208, vp_c3.data[2].z, temp_210);
    // 0x000848: 0x4C5810180B870008 Fadd
    temp_221 = temp_188 + vp_c6.data[46].x;
    // 0x000850: 0x4C5830180B07000E Fadd
    temp_222 = 0.0 - vp_c6.data[44].x;
    temp_223 = temp_188 + temp_222;
    // 0x000858: 0x4C58300C02F70007 Fadd
    temp_224 = 0.0 - vp_c3.data[11].w;
    temp_225 = temp_188 + temp_224;
    // 0x000868: 0x4C58100C00370909 Fadd
    temp_226 = temp_218 + vp_c3.data[0].w;
    // 0x000870: 0xEFF07F800B07FF07 Ast
    out_attr3.x = temp_225;
    // 0x000878: 0x49A000980C070801 Ffma
    temp_227 = fma(temp_221, vp_c6.data[48].x, temp_206);
    // 0x000888: 0x4C58100C00370C0C Fadd
    temp_228 = temp_212 + vp_c3.data[0].w;
    // 0x000890: 0x4C58100C00770D0D Fadd
    temp_229 = temp_219 + vp_c3.data[1].w;
    // 0x000898: 0x49A001980C470803 Ffma
    temp_230 = fma(temp_221, vp_c6.data[49].x, temp_207);
    // 0x0008A8: 0x4C58100C00770A0A Fadd
    temp_231 = temp_217 + vp_c3.data[1].w;
    // 0x0008B0: 0x4C68100C02470900 Fmul
    temp_232 = temp_226 * vp_c3.data[9].x;
    // 0x0008B8: 0x4C6810180BB70106 Fmul
    temp_233 = temp_227 * vp_c6.data[46].w;
    // 0x0008C8: 0x4C68101802C70C0C Fmul
    temp_234 = temp_228 * vp_c6.data[11].x;
    // 0x0008D0: 0xEFF07F801007FF06 Ast
    out_attr8.x = temp_233;
    // 0x0008D8: 0x49A0028C00A71205 Ffma
    temp_235 = fma(temp_183, vp_c3.data[2].z, temp_210);
    // 0x0008E8: 0x49A001180C870808 Ffma
    temp_236 = fma(temp_221, vp_c6.data[50].x, temp_211);
    // 0x0008F0: 0x49A0000C02570D01 Ffma
    temp_237 = fma(temp_229, vp_c3.data[9].y, temp_232);
    // 0x0008F8: 0x4C68101803870E0E Fmul
    temp_238 = temp_223 * vp_c6.data[14].x;
    // 0x000908: 0x4C68100C01C70902 Fmul
    temp_239 = temp_226 * vp_c3.data[7].x;
    // 0x000910: 0x4C68100C02870900 Fmul
    temp_240 = temp_226 * vp_c3.data[10].x;
    // 0x000918: 0x4C6810180BB70303 Fmul
    temp_241 = temp_230 * vp_c6.data[46].w;
    // 0x000928: 0x4C68100C02070906 Fmul
    temp_242 = temp_226 * vp_c3.data[8].x;
    // 0x000930: 0xEFF07F801047FF03 Ast
    out_attr8.y = temp_241;
    // 0x000938: 0x4C58300C0377120F Fadd
    temp_243 = 0.0 - vp_c3.data[13].w;
    temp_244 = temp_183 + temp_243;
    // 0x000948: 0x49A0061802D70A0A Ffma
    temp_245 = fma(temp_231, vp_c6.data[11].y, temp_234);
    // 0x000950: 0xEFF07F800B87FF0F Ast
    out_attr3.z = temp_244;
    // 0x000958: 0x4C58100C00B70505 Fadd
    temp_246 = temp_235 + vp_c3.data[2].w;
    // 0x000968: 0x49A0071803970B0B Ffma
    temp_247 = fma(temp_214, vp_c6.data[14].y, temp_238);
    // 0x000970: 0xEFF07F800C87FF05 Ast
    out_attr4.z = temp_246;
    // 0x000978: 0x4C5830180B271212 Fadd
    temp_248 = 0.0 - vp_c6.data[44].z;
    temp_249 = temp_183 + temp_248;
    // 0x000988: 0x4C58100C00B70404 Fadd
    temp_250 = temp_220 + vp_c3.data[2].w;
    // 0x000990: 0x49A0010C01D70D02 Ffma
    temp_251 = fma(temp_229, vp_c3.data[7].y, temp_239);
    // 0x000998: 0x49A0000C02970D03 Ffma
    temp_252 = fma(temp_229, vp_c3.data[10].y, temp_240);
    // 0x0009A8: 0x49A0030C02170D06 Ffma
    temp_253 = fma(temp_229, vp_c3.data[8].y, temp_242);
    // 0x0009B0: 0x49A0051802E7050A Ffma
    temp_254 = fma(temp_246, vp_c6.data[11].z, temp_245);
    // 0x0009B8: 0x49A0059803A7120B Ffma
    temp_255 = fma(temp_249, vp_c6.data[14].z, temp_247);
    // 0x0009C8: 0x4C98079803C7000C Mov
    // 0x0009D0: 0x4C98079803070005 Mov
    // 0x0009D8: 0x49A0008C02670401 Ffma
    temp_256 = fma(temp_250, vp_c3.data[9].z, temp_237);
    // 0x0009E8: 0x49A0010C01E70402 Ffma
    temp_257 = fma(temp_250, vp_c3.data[7].z, temp_251);
    // 0x0009F0: 0x49A0018C02A70403 Ffma
    temp_258 = fma(temp_250, vp_c3.data[10].z, temp_252);
    // 0x0009F8: 0x49A0030C02270406 Ffma
    temp_259 = fma(temp_250, vp_c3.data[8].z, temp_253);
    // 0x000A08: 0x4C6810180BB70808 Fmul
    temp_260 = temp_236 * vp_c6.data[46].w;
    // 0x000A10: 0x51A0061803B70B0B Ffma
    temp_261 = fma(temp_255, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000A18: 0xEFF07F801087FF08 Ast
    out_attr8.z = temp_260;
    // 0x000A28: 0x51A0029802F70A0A Ffma
    temp_262 = fma(temp_254, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000A30: 0xEFF07F800F47FF0B Ast
    out_attr7.y = temp_261;
    // 0x000A38: 0x4C58100C02770101 Fadd
    temp_263 = temp_256 + vp_c3.data[9].w;
    // 0x000A48: 0xEFF07F800F07FF0A Ast
    out_attr7.x = temp_262;
    // 0x000A50: 0x4C58100C01F70202 Fadd
    temp_264 = temp_257 + vp_c3.data[7].w;
    // 0x000A58: 0xEFF07F800787FF01 Ast
    gl_Position.z = temp_263;
    // 0x000A68: 0x4C58100C02B70303 Fadd
    temp_265 = temp_258 + vp_c3.data[10].w;
    // 0x000A70: 0xEFF07F800707FF02 Ast
    gl_Position.x = temp_264;
    // 0x000A78: 0x4C58100C02370606 Fadd
    temp_266 = temp_259 + vp_c3.data[8].w;
    // 0x000A88: 0xEFF07F8007C7FF03 Ast
    gl_Position.w = temp_265;
    // 0x000A90: 0xEFF07F800747FF06 Ast
    gl_Position.y = temp_266;
    // 0x000A98: 0xE30000000007000F Exit
    return;
}
