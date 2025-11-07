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
layout (location = 6) out vec4 out_attr6;
layout (location = 8) out vec4 out_attr8;
layout (location = 9) out vec4 out_attr9;


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
    int temp_115;
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
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    int temp_136;
    precise float temp_137;
    int temp_138;
    uint temp_139;
    uint temp_140;
    int temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    precise float temp_147;
    precise float temp_148;
    precise float temp_149;
    precise float temp_150;
    precise float temp_151;
    precise float temp_152;
    int temp_153;
    uint temp_154;
    uint temp_155;
    int temp_156;
    precise float temp_157;
    precise float temp_158;
    precise float temp_159;
    precise float temp_160;
    int temp_161;
    uint temp_162;
    uint temp_163;
    int temp_164;
    precise float temp_165;
    int temp_166;
    uint temp_167;
    int temp_168;
    precise float temp_169;
    precise float temp_170;
    precise float temp_171;
    int temp_172;
    uint temp_173;
    uint temp_174;
    int temp_175;
    precise float temp_176;
    int temp_177;
    uint temp_178;
    int temp_179;
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
    precise float temp_267;
    precise float temp_268;
    precise float temp_269;
    precise float temp_270;
    precise float temp_271;
    precise float temp_272;
    precise float temp_273;
    precise float temp_274;
    precise float temp_275;
    precise float temp_276;
    precise float temp_277;
    precise float temp_278;
    precise float temp_279;
    precise float temp_280;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C9807980CC70000 Mov
    // 0x000010: 0xEFD87F800807FF14 Ald
    temp_0 = in_attr0.x;
    // 0x000018: 0x4C9807980CD70001 Mov
    // 0x000028: 0xEFD87F800847FF16 Ald
    temp_1 = in_attr0.y;
    // 0x000030: 0x4C6810180CC70000 Fmul
    temp_2 = vp_c6.data[51].x * vp_c6.data[51].x;
    // 0x000038: 0xEFD87F800887FF0A Ald
    temp_3 = in_attr0.z;
    // 0x000048: 0x49A000180CD70100 Ffma
    temp_4 = fma(vp_c6.data[51].y, vp_c6.data[51].y, temp_2);
    // 0x000050: 0xEFD87F801047FF0B Ald
    temp_5 = in_attr8.y;
    // 0x000058: 0x4C9807980CE70001 Mov
    // 0x000068: 0xEFD87F800A07FF18 Ald
    temp_6 = in_attr2.x;
    // 0x000070: 0x49A000180CE7010C Ffma
    temp_7 = fma(vp_c6.data[51].z, vp_c6.data[51].z, temp_4);
    // 0x000078: 0xEFD87F800A47FF17 Ald
    temp_8 = in_attr2.y;
    // 0x000088: 0x4C68101000471401 Fmul
    temp_9 = temp_0 * vp_c4.data[1].x;
    // 0x000090: 0x5080000000570C0C Mufu
    temp_10 = inversesqrt(temp_7);
    // 0x000098: 0x4C68101000071405 Fmul
    temp_11 = temp_0 * vp_c4.data[0].x;
    // 0x0000A8: 0xEFD87F800987FF11 Ald
    temp_12 = in_attr1.z;
    // 0x0000B0: 0x4C68101000871403 Fmul
    temp_13 = temp_0 * vp_c4.data[2].x;
    // 0x0000B8: 0x5C58300001471414 Fadd
    temp_14 = 0.0 - temp_0;
    temp_15 = temp_0 + temp_14;
    // 0x0000C8: 0x49A0009000571600 Ffma
    temp_16 = fma(temp_1, vp_c4.data[1].y, temp_9);
    // 0x0000D0: 0x49A000900057FF01 Ffma
    temp_17 = fma(0.0, vp_c4.data[1].y, temp_9);
    // 0x0000D8: 0x49A0029000171604 Ffma
    temp_18 = fma(temp_1, vp_c4.data[0].y, temp_11);
    // 0x0000E8: 0x49A002900017FF05 Ffma
    temp_19 = fma(0.0, vp_c4.data[0].y, temp_11);
    // 0x0000F0: 0x5C68100001471414 Fmul
    temp_20 = temp_15 * temp_15;
    // 0x0000F8: 0x49A0001000670A07 Ffma
    temp_21 = fma(temp_3, vp_c4.data[1].z, temp_16);
    // 0x000108: 0x4C6810180CC70C00 Fmul
    temp_22 = temp_10 * vp_c6.data[51].x;
    // 0x000110: 0x49A0021000270A0E Ffma
    temp_23 = fma(temp_3, vp_c4.data[0].z, temp_18);
    // 0x000118: 0x49A0019000971604 Ffma
    temp_24 = fma(temp_1, vp_c4.data[2].y, temp_13);
    // 0x000128: 0x4C6810180CE70C02 Fmul
    temp_25 = temp_10 * vp_c6.data[51].z;
    // 0x000130: 0x49A001900097FF03 Ffma
    temp_26 = fma(0.0, vp_c4.data[2].y, temp_13);
    // 0x000138: 0x4C58101000770707 Fadd
    temp_27 = temp_21 + vp_c4.data[1].w;
    // 0x000148: 0x49A100180CF70006 Ffma
    temp_28 = 0.0 - vp_c6.data[51].w;
    temp_29 = fma(temp_22, temp_28, temp_22);
    // 0x000150: 0x4C58101000370E0E Fadd
    temp_30 = temp_23 + vp_c4.data[0].w;
    // 0x000158: 0x49A0021000A70A04 Ffma
    temp_31 = fma(temp_3, vp_c4.data[2].z, temp_24);
    // 0x000168: 0x49A101180CF70208 Ffma
    temp_32 = 0.0 - vp_c6.data[51].w;
    temp_33 = fma(temp_25, temp_32, temp_25);
    // 0x000170: 0x49A0009000670A01 Ffma
    temp_34 = fma(temp_3, vp_c4.data[1].z, temp_17);
    // 0x000178: 0x4C68101409670709 Fmul
    temp_35 = temp_27 * vp_c5.data[37].z;
    // 0x000188: 0x1E23DCCCCCD7060F Fmul32i
    temp_36 = temp_29 * 0.100000001;
    // 0x000190: 0x49A0029000270A06 Ffma
    temp_37 = fma(temp_3, vp_c4.data[0].z, temp_19);
    // 0x000198: 0x4C58101000B70410 Fadd
    temp_38 = temp_31 + vp_c4.data[2].w;
    // 0x0001A8: 0x49A0019000A70A05 Ffma
    temp_39 = fma(temp_3, vp_c4.data[2].z, temp_26);
    // 0x0001B0: 0x4C5810100077010D Fadd
    temp_40 = temp_34 + vp_c4.data[1].w;
    // 0x0001B8: 0x4C98079C23070001 Mov
    // 0x0001C8: 0x59A1048000F70E0F Ffma
    temp_41 = 0.0 - temp_36;
    temp_42 = fma(temp_30, temp_41, temp_35);
    // 0x0001D0: 0x1E23DCCCCCD70809 Fmul32i
    temp_43 = temp_33 * 0.100000001;
    // 0x0001D8: 0x4C58101000370603 Fadd
    temp_44 = temp_37 + vp_c4.data[0].w;
    // 0x0001E8: 0x4C58101000B70505 Fadd
    temp_45 = temp_39 + vp_c4.data[2].w;
    // 0x0001F0: 0x4C98079400270008 Mov
    // 0x0001F8: 0x5C58300000D70715 Fadd
    temp_46 = 0.0 - temp_40;
    temp_47 = temp_27 + temp_46;
    // 0x000208: 0x4C6810180CD70C0C Fmul
    temp_48 = temp_10 * vp_c6.data[51].y;
    // 0x000210: 0x59A0078000971004 Ffma
    temp_49 = fma(temp_38, temp_43, temp_42);
    // 0x000218: 0x5C58300000370E1D Fadd
    temp_50 = 0.0 - temp_44;
    temp_51 = temp_30 + temp_50;
    // 0x000228: 0x5C5830000057101E Fadd
    temp_52 = 0.0 - temp_45;
    temp_53 = temp_38 + temp_52;
    // 0x000230: 0x51A0041400470B0F Ffma
    temp_54 = fma(temp_5, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000238: 0xEFD87F800907FF08 Ald
    temp_55 = in_attr1.x;
    // 0x000248: 0x4C98079400370009 Mov
    // 0x000250: 0x4C68101000871812 Fmul
    temp_56 = temp_6 * vp_c4.data[2].x;
    // 0x000258: 0x32A0023F00070104 Ffma
    temp_57 = fma(vp_c7.data[140].x, 0.5, temp_49);
    // 0x000268: 0x5C69100001D7FF06 Fmul
    temp_58 = 0.0 - temp_51;
    temp_59 = 0.0 * temp_58;
    // 0x000270: 0x59A10E8001E7FF1D Ffma
    temp_60 = 0.0 - temp_53;
    temp_61 = fma(0.0, temp_60, temp_51);
    // 0x000278: 0x59A20A8001E7FF1E Ffma
    temp_62 = 0.0 - temp_47;
    temp_63 = fma(0.0, temp_53, temp_62);
    // 0x000288: 0x51A0049400570B0B Ffma
    temp_64 = fma(temp_5, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000290: 0xEFD87F800A87FF09 Ald
    temp_65 = in_attr2.z;
    // 0x000298: 0x4C68101000071819 Fmul
    temp_66 = temp_6 * vp_c4.data[0].x;
    // 0x0002A8: 0x3868104040070401 Fmul
    temp_67 = temp_57 * 3.0;
    // 0x0002B0: 0x5C9000000047001B Rro
    // 0x0002B8: 0x59A003000157FF15 Ffma
    temp_68 = fma(0.0, temp_47, temp_59);
    // 0x0002C8: 0x5080000000071B1B Mufu
    temp_69 = cos(temp_57);
    // 0x0002D0: 0x38681040A0070406 Fmul
    temp_70 = temp_57 * 5.0;
    // 0x0002D8: 0x4C68101409770404 Fmul
    temp_71 = temp_57 * vp_c5.data[37].w;
    // 0x0002E8: 0x5C68100001E7001E Fmul
    temp_72 = temp_22 * temp_63;
    // 0x0002F0: 0x5C9000000017001A Rro
    // 0x0002F8: 0xEFD87F800947FF01 Ald
    temp_73 = in_attr1.y;
    // 0x000308: 0x4C68101000471818 Fmul
    temp_74 = temp_6 * vp_c4.data[1].x;
    // 0x000310: 0x5080000000071A1A Mufu
    temp_75 = cos(temp_67);
    // 0x000318: 0x5C90000000670013 Rro
    // 0x000328: 0x5C5910000167FF16 Fadd
    temp_76 = -0.0 + temp_1;
    // 0x000330: 0x5080000000071313 Mufu
    temp_77 = cos(temp_70);
    // 0x000338: 0x5C90000000470006 Rro
    // 0x000348: 0xEFD87F801007FF04 Ald
    temp_78 = in_attr8.x;
    // 0x000350: 0x59A00F0001D70C1C Ffma
    temp_79 = fma(temp_48, temp_61, temp_72);
    // 0x000358: 0x5080000000170606 Mufu
    temp_80 = sin(temp_71);
    // 0x000368: 0x5C68100001B71B1B Fmul
    temp_81 = temp_69 * temp_69;
    // 0x000370: 0x49A0091000971712 Ffma
    temp_82 = fma(temp_8, vp_c4.data[2].y, temp_56);
    // 0x000378: 0x49A00C1000571718 Ffma
    temp_83 = fma(temp_8, vp_c4.data[1].y, temp_74);
    // 0x000388: 0x59A00A0001671614 Ffma
    temp_84 = fma(temp_76, temp_76, temp_20);
    // 0x000390: 0x5C58300000A70A16 Fadd
    temp_85 = 0.0 - temp_3;
    temp_86 = temp_3 + temp_85;
    // 0x000398: 0x59A00E0001570215 Ffma
    temp_87 = fma(temp_25, temp_68, temp_79);
    // 0x0003A8: 0x5C68100001A71B1D Fmul
    temp_88 = temp_81 * temp_75;
    // 0x0003B0: 0x49A00C900017171A Ffma
    temp_89 = fma(temp_8, vp_c4.data[0].y, temp_66);
    // 0x0003B8: 0x4C68101000870817 Fmul
    temp_90 = temp_55 * vp_c4.data[2].x;
    // 0x0003C8: 0x4C9807980CF70019 Mov
    // 0x0003D0: 0x4C6810100007081B Fmul
    temp_91 = temp_55 * vp_c4.data[0].x;
    // 0x0003D8: 0x4C68101000470808 Fmul
    temp_92 = temp_55 * vp_c4.data[1].x;
    // 0x0003E8: 0x5C68120001371D13 Fmul
    temp_93 = temp_88 * 0.5;
    temp_94 = temp_93 * temp_77;
    // 0x0003F0: 0x1E23DCCCCCD70606 Fmul32i
    temp_95 = temp_80 * 0.100000001;
    // 0x0003F8: 0x49A00C1000670918 Ffma
    temp_96 = fma(temp_65, vp_c4.data[1].z, temp_83);
    // 0x000408: 0x49A00B900097010A Ffma
    temp_97 = fma(temp_73, vp_c4.data[2].y, temp_90);
    // 0x000410: 0x59A00A0001671617 Ffma
    temp_98 = fma(temp_86, temp_86, temp_84);
    // 0x000418: 0x4C68101409571914 Fmul
    temp_99 = vp_c6.data[51].w * vp_c5.data[37].y;
    // 0x000428: 0x5080000000871717 Mufu
    temp_100 = sqrt(temp_98);
    // 0x000430: 0x59A0030001371515 Ffma
    temp_101 = fma(temp_87, temp_94, temp_95);
    // 0x000438: 0x49A00D900017011B Ffma
    temp_102 = fma(temp_73, vp_c4.data[0].y, temp_91);
    // 0x000448: 0x49A0041000570108 Ffma
    temp_103 = fma(temp_73, vp_c4.data[1].y, temp_92);
    // 0x000450: 0x49A00D1000270906 Ffma
    temp_104 = fma(temp_65, vp_c4.data[0].z, temp_89);
    // 0x000458: 0x49A007940007040F Ffma
    temp_105 = fma(temp_78, vp_c5.data[0].x, temp_54);
    // 0x000468: 0x49A005940017040B Ffma
    temp_106 = fma(temp_78, vp_c5.data[0].y, temp_64);
    // 0x000470: 0x5C68100001571416 Fmul
    temp_107 = temp_99 * temp_101;
    // 0x000478: 0x49A00D9000271101 Ffma
    temp_108 = fma(temp_12, vp_c4.data[0].z, temp_102);
    // 0x000488: 0x49A0041000671108 Ffma
    temp_109 = fma(temp_12, vp_c4.data[1].z, temp_103);
    // 0x000490: 0x49A0051000A71115 Ffma
    temp_110 = fma(temp_12, vp_c4.data[2].z, temp_97);
    // 0x000498: 0x5C6810000067060A Fmul
    temp_111 = temp_104 * temp_104;
    // 0x0004A8: 0x49A0091000A70912 Ffma
    temp_112 = fma(temp_65, vp_c4.data[2].z, temp_82);
    // 0x0004B0: 0x5C68100001770C11 Fmul
    temp_113 = temp_48 * temp_100;
    // 0x0004B8: 0x4CB0119002371A0C F2i
    temp_114 = trunc(vp_c4.data[8].w);
    temp_115 = int(temp_114);
    // 0x0004C8: 0x5C9000000167001B Rro
    // 0x0004D0: 0x5C68100000170119 Fmul
    temp_116 = temp_108 * temp_108;
    // 0x0004D8: 0x5080000000171B04 Mufu
    temp_117 = sin(temp_107);
    // 0x0004E8: 0x5C68100001770016 Fmul
    temp_118 = temp_22 * temp_100;
    // 0x0004F0: 0x5080000000071B00 Mufu
    temp_119 = cos(temp_107);
    // 0x0004F8: 0x5C68100001770217 Fmul
    temp_120 = temp_25 * temp_100;
    // 0x000508: 0x59A00C800087081A Ffma
    temp_121 = fma(temp_109, temp_109, temp_116);
    // 0x000510: 0x59A0050001871819 Ffma
    temp_122 = fma(temp_96, temp_96, temp_111);
    // 0x000518: 0x5C6810000117140A Fmul
    temp_123 = temp_99 * temp_113;
    // 0x000528: 0x5C68100001771411 Fmul
    temp_124 = temp_99 * temp_120;
    // 0x000530: 0x5C68100001671409 Fmul
    temp_125 = temp_99 * temp_118;
    // 0x000538: 0x59A00D0001571502 Ffma
    temp_126 = fma(temp_110, temp_110, temp_121);
    // 0x000548: 0x59A00C8001271217 Ffma
    temp_127 = fma(temp_112, temp_112, temp_122);
    // 0x000550: 0x5080000000570202 Mufu
    temp_128 = inversesqrt(temp_126);
    // 0x000558: 0x5C68100000070D19 Fmul
    temp_129 = temp_40 * temp_119;
    // 0x000568: 0x5080000000571717 Mufu
    temp_130 = inversesqrt(temp_127);
    // 0x000570: 0x5C69100000470D16 Fmul
    temp_131 = 0.0 - temp_117;
    temp_132 = temp_40 * temp_131;
    // 0x000578: 0x5C5910000057051A Fadd
    temp_133 = 0.0 - temp_45;
    temp_134 = temp_133 + temp_45;
    // 0x000588: 0x5C68100001171311 Fmul
    temp_135 = temp_94 * temp_124;
    // 0x000590: 0x3848000000470C05 Shl
    temp_136 = temp_115 << 4;
    // 0x000598: 0x5C68100000971309 Fmul
    temp_137 = temp_94 * temp_125;
    // 0x0005A8: 0xEF94007068870514 Ldc
    temp_138 = temp_136 + 0x688;
    temp_139 = uint(temp_138) >> 2;
    temp_140 = temp_139 >> 2;
    temp_141 = int(temp_139) & 3;
    temp_142 = vp_c7.data[int(temp_140)][temp_141];
    // 0x0005B0: 0x59A30C800047031B Ffma
    temp_143 = 0.0 - temp_117;
    temp_144 = 0.0 - temp_129;
    temp_145 = fma(temp_44, temp_143, temp_144);
    // 0x0005B8: 0xEFD87F800AC7FF19 Ald
    temp_146 = in_attr2.w;
    // 0x0005C8: 0x59A30B0000070316 Ffma
    temp_147 = 0.0 - temp_119;
    temp_148 = 0.0 - temp_132;
    temp_149 = fma(temp_44, temp_147, temp_148);
    // 0x0005D0: 0xEFF07F800E07FF0F Ast
    out_attr6.x = temp_105;
    // 0x0005D8: 0x5C58100001A7100C Fadd
    temp_150 = temp_38 + temp_134;
    // 0x0005E8: 0xEFF07F800E47FF0B Ast
    out_attr6.y = temp_106;
    // 0x0005F0: 0x5C58100001B70D0D Fadd
    temp_151 = temp_40 + temp_145;
    // 0x0005F8: 0x5C5810000167031A Fadd
    temp_152 = temp_44 + temp_149;
    // 0x000608: 0xEF94007048870516 Ldc
    temp_153 = temp_136 + 0x488;
    temp_154 = uint(temp_153) >> 2;
    temp_155 = temp_154 >> 2;
    temp_156 = int(temp_154) & 3;
    temp_157 = vp_c7.data[int(temp_155)][temp_156];
    // 0x000610: 0x5C68100000270101 Fmul
    temp_158 = temp_108 * temp_128;
    // 0x000618: 0x5C68100000270808 Fmul
    temp_159 = temp_109 * temp_128;
    // 0x000628: 0xEFF07F800807FF01 Ast
    out_attr0.x = temp_158;
    // 0x000630: 0x5C68100000271515 Fmul
    temp_160 = temp_110 * temp_128;
    // 0x000638: 0xEF95007048070502 Ldc
    temp_161 = temp_136 + 0x480;
    temp_162 = uint(temp_161) >> 2;
    temp_163 = temp_162 >> 2;
    temp_164 = int(temp_162) & 3;
    temp_165 = vp_c7.data[int(temp_163)][temp_164];
    temp_166 = int(temp_162) + 1;
    temp_167 = uint(temp_166) >> 2;
    temp_168 = temp_166 & 3;
    temp_169 = vp_c7.data[int(temp_167)][temp_168];
    // 0x000648: 0x59A006000077FF1B Ffma
    temp_170 = fma(0.0, temp_27, temp_150);
    // 0x000650: 0xEFF07F800847FF08 Ast
    out_attr0.y = temp_159;
    // 0x000658: 0x59A006800107FF1D Ffma
    temp_171 = fma(0.0, temp_38, temp_151);
    // 0x000668: 0xEF9500706807050C Ldc
    temp_172 = temp_136 + 0x680;
    temp_173 = uint(temp_172) >> 2;
    temp_174 = temp_173 >> 2;
    temp_175 = int(temp_173) & 3;
    temp_176 = vp_c7.data[int(temp_174)][temp_175];
    temp_177 = int(temp_173) + 1;
    temp_178 = uint(temp_177) >> 2;
    temp_179 = temp_177 & 3;
    temp_180 = vp_c7.data[int(temp_178)][temp_179];
    // 0x000670: 0x59A00D000107FF1A Ffma
    temp_181 = fma(0.0, temp_38, temp_152);
    // 0x000678: 0xEFF07F800887FF15 Ast
    out_attr0.z = temp_160;
    // 0x000688: 0x5C68100000A7130A Fmul
    temp_182 = temp_94 * temp_123;
    // 0x000690: 0x59A10D8000E7FF1B Ffma
    temp_183 = 0.0 - temp_30;
    temp_184 = fma(0.0, temp_183, temp_170);
    // 0x000698: 0x59A00E800007071D Ffma
    temp_185 = fma(temp_27, temp_119, temp_171);
    // 0x0006A8: 0x5C68100001771818 Fmul
    temp_186 = temp_96 * temp_130;
    // 0x0006B0: 0x5C68100001771212 Fmul
    temp_187 = temp_112 * temp_130;
    // 0x0006B8: 0xEFF07F800947FF18 Ast
    out_attr1.y = temp_186;
    // 0x0006C8: 0x59A10D0000470707 Ffma
    temp_188 = 0.0 - temp_117;
    temp_189 = fma(temp_27, temp_188, temp_181);
    // 0x0006D0: 0xEFF07F800987FF12 Ast
    out_attr1.z = temp_187;
    // 0x0006D8: 0x49A00D8400071111 Ffma
    temp_190 = fma(temp_135, vp_c1.data[0].x, temp_184);
    // 0x0006E8: 0x59A00E8000470E1D Ffma
    temp_191 = fma(temp_30, temp_117, temp_185);
    // 0x0006F0: 0x5C68100001770606 Fmul
    temp_192 = temp_104 * temp_130;
    // 0x0006F8: 0x5C68100001571817 Fmul
    temp_193 = temp_186 * temp_160;
    // 0x000708: 0xEFF07F800907FF06 Ast
    out_attr1.x = temp_192;
    // 0x000710: 0x59A0038000070E07 Ffma
    temp_194 = fma(temp_30, temp_119, temp_189);
    // 0x000718: 0x59A00A0001671114 Ffma
    temp_195 = fma(temp_190, temp_157, temp_142);
    // 0x000728: 0x49A00E8400070A0A Ffma
    temp_196 = fma(temp_182, vp_c1.data[0].x, temp_191);
    // 0x000730: 0xEFF07F800D87FF14 Ast
    out_attr5.z = temp_195;
    // 0x000738: 0x49A0038400070907 Ffma
    temp_197 = fma(temp_137, vp_c1.data[0].x, temp_194);
    // 0x000748: 0x5C6810000017120F Fmul
    temp_198 = temp_187 * temp_158;
    // 0x000750: 0x5C6810000087060B Fmul
    temp_199 = temp_192 * temp_159;
    // 0x000758: 0x4C5810180BA71400 Fadd
    temp_200 = temp_195 + vp_c6.data[46].z;
    // 0x000768: 0x59A20B8000871217 Ffma
    temp_201 = 0.0 - temp_193;
    temp_202 = fma(temp_187, temp_159, temp_201);
    // 0x000770: 0x59A0068000370A03 Ffma
    temp_203 = fma(temp_196, temp_169, temp_180);
    // 0x000778: 0x59A0060000270702 Ffma
    temp_204 = fma(temp_197, temp_165, temp_176);
    // 0x000788: 0xEFF07F800D47FF03 Ast
    out_attr5.y = temp_203;
    // 0x000790: 0x59A207800157060F Ffma
    temp_205 = 0.0 - temp_198;
    temp_206 = fma(temp_192, temp_160, temp_205);
    // 0x000798: 0xEFF07F800D07FF02 Ast
    out_attr5.x = temp_204;
    // 0x0007A8: 0x59A205800017180B Ffma
    temp_207 = 0.0 - temp_199;
    temp_208 = fma(temp_186, temp_158, temp_207);
    // 0x0007B0: 0x4C5830180B070209 Fadd
    temp_209 = 0.0 - vp_c6.data[44].x;
    temp_210 = temp_204 + temp_209;
    // 0x0007B8: 0x4C6810180C270005 Fmul
    temp_211 = temp_200 * vp_c6.data[48].z;
    // 0x0007C8: 0x4C6810180C670004 Fmul
    temp_212 = temp_200 * vp_c6.data[49].z;
    // 0x0007D0: 0x4C6810180CA70007 Fmul
    temp_213 = temp_200 * vp_c6.data[50].z;
    // 0x0007D8: 0x4C5810180B970306 Fadd
    temp_214 = temp_203 + vp_c6.data[46].y;
    // 0x0007E8: 0x4C68100C00070201 Fmul
    temp_215 = temp_204 * vp_c3.data[0].x;
    // 0x0007F0: 0x5C68100001971717 Fmul
    temp_216 = temp_202 * temp_146;
    // 0x0007F8: 0x5C68100001970F0F Fmul
    temp_217 = temp_206 * temp_146;
    // 0x000808: 0xEFF07F800A07FF17 Ast
    out_attr2.x = temp_216;
    // 0x000810: 0x5C68100001970B19 Fmul
    temp_218 = temp_208 * temp_146;
    // 0x000818: 0xEFF07F800A47FF0F Ast
    out_attr2.y = temp_217;
    // 0x000828: 0x4C68100C00870200 Fmul
    temp_219 = temp_204 * vp_c3.data[2].x;
    // 0x000830: 0xEFF07F800A87FF19 Ast
    out_attr2.z = temp_218;
    // 0x000838: 0x4C5830180B17030A Fadd
    temp_220 = 0.0 - vp_c6.data[44].y;
    temp_221 = temp_203 + temp_220;
    // 0x000848: 0x4C6810180387090B Fmul
    temp_222 = temp_210 * vp_c6.data[14].x;
    // 0x000850: 0x4C68100C00470208 Fmul
    temp_223 = temp_204 * vp_c3.data[1].x;
    // 0x000858: 0x49A002980C170605 Ffma
    temp_224 = fma(temp_214, vp_c6.data[48].y, temp_211);
    // 0x000868: 0x49A002180C570604 Ffma
    temp_225 = fma(temp_214, vp_c6.data[49].y, temp_212);
    // 0x000870: 0x49A003980C97060C Ffma
    temp_226 = fma(temp_214, vp_c6.data[50].y, temp_213);
    // 0x000878: 0x49A0008C00170309 Ffma
    temp_227 = fma(temp_203, vp_c3.data[0].y, temp_215);
    // 0x000888: 0x4C58101002071406 Fadd
    temp_228 = temp_195 + vp_c4.data[8].x;
    // 0x000890: 0x49A0000C00970307 Ffma
    temp_229 = fma(temp_203, vp_c3.data[2].y, temp_219);
    // 0x000898: 0x49A0059803970A0D Ffma
    temp_230 = fma(temp_221, vp_c6.data[14].y, temp_222);
    // 0x0008A8: 0x49A0040C0057030B Ffma
    temp_231 = fma(temp_203, vp_c3.data[1].y, temp_223);
    // 0x0008B0: 0x4C5810180B87020A Fadd
    temp_232 = temp_204 + vp_c6.data[46].x;
    // 0x0008B8: 0x49A0048C00271408 Ffma
    temp_233 = fma(temp_195, vp_c3.data[0].z, temp_227);
    // 0x0008C8: 0x49A0048C00270609 Ffma
    temp_234 = fma(temp_228, vp_c3.data[0].z, temp_227);
    // 0x0008D0: 0x49A0038C00A71401 Ffma
    temp_235 = fma(temp_195, vp_c3.data[2].z, temp_229);
    // 0x0008D8: 0x49A0038C00A70600 Ffma
    temp_236 = fma(temp_228, vp_c3.data[2].z, temp_229);
    // 0x0008E8: 0x4C58300C0377140E Fadd
    temp_237 = 0.0 - vp_c3.data[13].w;
    temp_238 = temp_195 + temp_237;
    // 0x0008F0: 0x4C5830180B271407 Fadd
    temp_239 = 0.0 - vp_c6.data[44].z;
    temp_240 = temp_195 + temp_239;
    // 0x0008F8: 0xEFF07F800B87FF0E Ast
    out_attr3.z = temp_238;
    // 0x000908: 0x49A002980C070A05 Ffma
    temp_241 = fma(temp_232, vp_c6.data[48].x, temp_224);
    // 0x000910: 0x49A002180C470A04 Ffma
    temp_242 = fma(temp_232, vp_c6.data[49].x, temp_225);
    // 0x000918: 0x49A0058C00670606 Ffma
    temp_243 = fma(temp_228, vp_c3.data[1].z, temp_231);
    // 0x000928: 0x4C58100C00370909 Fadd
    temp_244 = temp_234 + vp_c3.data[0].w;
    // 0x000930: 0x49A0058C0067140B Ffma
    temp_245 = fma(temp_195, vp_c3.data[1].z, temp_231);
    // 0x000938: 0x4C58100C00370808 Fadd
    temp_246 = temp_233 + vp_c3.data[0].w;
    // 0x000948: 0x49A0069803A7070D Ffma
    temp_247 = fma(temp_240, vp_c6.data[14].z, temp_230);
    // 0x000950: 0x4C58300C02F7020E Fadd
    temp_248 = 0.0 - vp_c3.data[11].w;
    temp_249 = temp_204 + temp_248;
    // 0x000958: 0x4C6810180BB70502 Fmul
    temp_250 = temp_241 * vp_c6.data[46].w;
    // 0x000968: 0xEFF07F800B07FF0E Ast
    out_attr3.x = temp_249;
    // 0x000970: 0x4C58300C0337030F Fadd
    temp_251 = 0.0 - vp_c3.data[12].w;
    temp_252 = temp_203 + temp_251;
    // 0x000978: 0xEFF07F801107FF02 Ast
    out_attr9.x = temp_250;
    // 0x000988: 0x4C6810180BB70407 Fmul
    temp_253 = temp_242 * vp_c6.data[46].w;
    // 0x000990: 0xEFF07F800B47FF0F Ast
    out_attr3.y = temp_252;
    // 0x000998: 0x4C58100C00B70105 Fadd
    temp_254 = temp_235 + vp_c3.data[2].w;
    // 0x0009A8: 0xEFF07F801147FF07 Ast
    out_attr9.y = temp_253;
    // 0x0009B0: 0x4C68100C02470903 Fmul
    temp_255 = temp_244 * vp_c3.data[9].x;
    // 0x0009B8: 0xEFF07F800C87FF05 Ast
    out_attr4.z = temp_254;
    // 0x0009C8: 0x4C68100C01C70901 Fmul
    temp_256 = temp_244 * vp_c3.data[7].x;
    // 0x0009D0: 0x4C68100C02870904 Fmul
    temp_257 = temp_244 * vp_c3.data[10].x;
    // 0x0009D8: 0x4C58100C00770B0B Fadd
    temp_258 = temp_245 + vp_c3.data[1].w;
    // 0x0009E8: 0x4C68101802C70808 Fmul
    temp_259 = temp_246 * vp_c6.data[11].x;
    // 0x0009F0: 0x4C58100C00770606 Fadd
    temp_260 = temp_243 + vp_c3.data[1].w;
    // 0x0009F8: 0x4C68100C02070909 Fmul
    temp_261 = temp_244 * vp_c3.data[8].x;
    // 0x000A08: 0x4C58100C00B70000 Fadd
    temp_262 = temp_236 + vp_c3.data[2].w;
    // 0x000A10: 0x49A006180C870A0C Ffma
    temp_263 = fma(temp_232, vp_c6.data[50].x, temp_226);
    // 0x000A18: 0x4C9807980307000A Mov
    // 0x000A28: 0x49A0041802D70B08 Ffma
    temp_264 = fma(temp_258, vp_c6.data[11].y, temp_259);
    // 0x000A30: 0x49A0018C02570603 Ffma
    temp_265 = fma(temp_260, vp_c3.data[9].y, temp_255);
    // 0x000A38: 0x49A0008C01D70601 Ffma
    temp_266 = fma(temp_260, vp_c3.data[7].y, temp_256);
    // 0x000A48: 0x49A0020C02970602 Ffma
    temp_267 = fma(temp_260, vp_c3.data[10].y, temp_257);
    // 0x000A50: 0x49A0048C02170609 Ffma
    temp_268 = fma(temp_260, vp_c3.data[8].y, temp_261);
    // 0x000A58: 0x4C98079803C7000B Mov
    // 0x000A68: 0x49A0041802E70508 Ffma
    temp_269 = fma(temp_254, vp_c6.data[11].z, temp_264);
    // 0x000A70: 0x49A0018C02670003 Ffma
    temp_270 = fma(temp_262, vp_c3.data[9].z, temp_265);
    // 0x000A78: 0x49A0008C01E70001 Ffma
    temp_271 = fma(temp_262, vp_c3.data[7].z, temp_266);
    // 0x000A88: 0x49A0010C02A70002 Ffma
    temp_272 = fma(temp_262, vp_c3.data[10].z, temp_267);
    // 0x000A90: 0x49A0048C02270009 Ffma
    temp_273 = fma(temp_262, vp_c3.data[8].z, temp_268);
    // 0x000A98: 0x4C6810180BB70C0C Fmul
    temp_274 = temp_263 * vp_c6.data[46].w;
    // 0x000AA8: 0x51A0059803B70D0D Ffma
    temp_275 = fma(temp_247, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000AB0: 0xEFF07F801187FF0C Ast
    out_attr9.z = temp_274;
    // 0x000AB8: 0x51A0051802F70808 Ffma
    temp_276 = fma(temp_269, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000AC8: 0xEFF07F801047FF0D Ast
    out_attr8.y = temp_275;
    // 0x000AD0: 0x4C58100C02770303 Fadd
    temp_277 = temp_270 + vp_c3.data[9].w;
    // 0x000AD8: 0xEFF07F801007FF08 Ast
    out_attr8.x = temp_276;
    // 0x000AE8: 0x4C58100C01F70101 Fadd
    temp_278 = temp_271 + vp_c3.data[7].w;
    // 0x000AF0: 0xEFF07F800787FF03 Ast
    gl_Position.z = temp_277;
    // 0x000AF8: 0x4C58100C02B70202 Fadd
    temp_279 = temp_272 + vp_c3.data[10].w;
    // 0x000B08: 0xEFF07F800707FF01 Ast
    gl_Position.x = temp_278;
    // 0x000B10: 0x4C58100C02370909 Fadd
    temp_280 = temp_273 + vp_c3.data[8].w;
    // 0x000B18: 0xEFF07F8007C7FF02 Ast
    gl_Position.w = temp_279;
    // 0x000B28: 0xEFF07F800747FF09 Ast
    gl_Position.y = temp_280;
    // 0x000B30: 0xE30000000007000F Exit
    return;
}
